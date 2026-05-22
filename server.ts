/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load local environment variables
dotenv.config();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateContentWithRetry(
  ai: GoogleGenAI,
  params: any,
  retries = 2,
  delay = 800
): Promise<any> {
  let attempt = 0;
  while (true) {
    try {
      return await ai.models.generateContent(params);
    } catch (error: any) {
      attempt++;
      const errorMsg = error?.message || String(error);
      const is503 =
        error?.status === 503 ||
        error?.code === 503 ||
        errorMsg.includes("503") ||
        errorMsg.includes("UNAVAILABLE") ||
        errorMsg.includes("high demand") ||
        errorMsg.includes("temporary");

      if (is503 && attempt <= retries) {
        console.warn(
          `[Gemini API 503 Temporary High Demand] Attempt ${attempt} failed. Retrying in ${delay}ms...`
        );
        await sleep(delay);
        delay *= 1.5;
      } else {
        throw error;
      }
    }
  }
}

const isProduction = process.env.NODE_ENV === "production";
const PORT = 3000;

// Initialize Gemini SDK with User-Agent telemetry
let aiClient: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
  }
} else {
  console.warn("GEMINI_API_KEY is not defined. D-Pharma Chat is running in simulation mode.");
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API router / health check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      mode: isProduction ? "production" : "development",
      hasApiKey: !!apiKey
    });
  });

  // Intelligent pharmacy/medical chatbot API using Gemini 3.5 Flash
  app.post("/api/pharma-chat", async (req, res) => {
    const { prompt, history } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Le message est requis" });
    }

    // Strict Djibouti pharma database for fallback predictions
    const simulatedAnswers: { keywords: string[]; answer: string }[] = [
      {
        keywords: ["doliprane", "dolipran", "paracetamol"],
        answer: "Le **Doliprane 1000mg** est disponible à la **Pharmacie Centrale** de Djibouti (Boulevard de la République) au prix de 450 FDJ. Posologie recommandée : 1 comprimé toutes les 6 heures si nécessaire. Ne dépassez jamais 4 comprimés (4g) par jour."
      },
      {
        keywords: ["ibuprofene", "ibuproféne", "advil"],
        answer: "L'**Ibuprofène 400mg** est disponible à la **Pharmacie du Centre** au prix de 600 FDJ. C'est un anti-inflammatoire. Il doit être pris impérativement au milieu du repas pour protéger votre estomac. Posologie : 1 comprimé toutes les 8 heures maximum."
      },
      {
        keywords: ["strepsil", "strepsils", "gorge"],
        answer: "Les pastilles **Strepsils Miel Citron** sont en stock à la **Pharmacie d'Ambouli** au prix de 850 FDJ. Elles conviennent pour apaiser les maux de gorge légers. Sucer 3 à 6 pastilles par jour sans croquer."
      },
      {
        keywords: ["amoxicilline", "antibiotique", "amox"],
        answer: "La boîte d'**Amoxicilline 1g** est disponible à la **Pharmacie de Balbala** au prix de 1 200 FDJ. **Attention :** Ce produit étant un antibiotique, il nécessite impérativement le téléchargement d'une ordonnance valide via D-Pharma pour validation d'achat."
      },
      {
        keywords: ["garde", "pharmacie de garde", "nuit", "ouvert"],
        answer: "Cette nuit à Djibouti-Ville, les pharmacies de garde partenaires ouvertes sont la **Pharmacie Centrale** (Boulevard de la République), la **Pharmacie d'Ambouli**, et la **Pharmacie de Balbala**. D-Pharma propose la livraison à domicile 24h/24 pour ces officines de garde de nuit avec un tarif fixe logistique de 400 FDJ !"
      },
      {
        keywords: ["livraison", "livrer", "domicile"],
        answer: "D-Pharma livre vos médicaments à domicile partout à Djibouti-Ville (Balbala, Ambouli, Heron, Centre-ville) pour un tarif logistique fixe de **400 FDJ**. Le paiement s'effectue facilement via Mobile Money (D-Money, Waafi) ou en espèces à la livraison."
      }
    ];

    // Determine if we use Gemini or simulation fallback
    if (aiClient) {
      try {
        const systemInstruction = `
          Tu es l'Assistant Médical Intelligent de la plateforme D-Pharma, la première solution de santé connectée à Djibouti présentée par Ezzaldine & Mohamed (site web développé par Yahya Said Awaleh).
          Ton rôle est de répondre aux pharmaciens et aux patients djiboutiens de manière professionnelle, rassurante et structurée en français.
          
          Contexte de D-Pharma:
          - D-Pharma permet de commander des médicaments, localiser les pharmacies physiques à Djibouti, gérer l'historique et recevoir des rappels.
          - Livraison express à domicile pour un tarif fixe de 400 FDJ.
          - Tarifs d'exemple à Djibouti : Doliprane (450 FDJ), Ibuprofène (600 FDJ), Strepsils (850 FDJ), Amoxicilline (1200 FDJ).
          - Les pharmacies phares de Djibouti face à l'utilisateur : Pharmacie Centrale (centre-ville, de garde), Pharmacie du Centre (centre-ville), Pharmacie d'Ambouli (de garde), Pharmacie de Balbala.
          - Moyens de paiement : Mobile Money (Waafi, D-Money) et Cash.
          - Équipe fondatrice : Ezzaldine Sanad Khaled (Co-fondateur) & Mohamed Souleiman Dahir (Co-fondateur). Site développé par Yahya Said Awaleh.
          
          Règles d'or des réponses:
          1. Sois très poli et mentionne les réalités ou localisations de Djibouti si pertinent.
          2. Pour les antibiotiques comme l'Amoxicilline, insiste sur la nécessité de fournir une ordonnance.
          3. Rappelle toujours de consulter un médecin en cas de douleur persistante ou d'urgence de santé ("Ezzaldine, Mohamed et l'équipe vous conseillent de toujours consulter un médecin").
          4. Écris en Markdown propre et attrayant avec des éléments en gras et des sauts de ligne réguliers.
          5. Si l'utilisateur tape des fautes d'orthographe de médicaments (ex: "dolipran"), corrige poliment ("Doliprane").
        `;

        // Format conversational messages
        const promptContent = prompt;

        const response = await generateContentWithRetry(aiClient, {
          model: "gemini-3.5-flash",
          contents: promptContent,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });

        const reply = response.text || "Désolé, je n'ai pas pu générer une réponse de santé. Veuillez réessayer.";
        return res.json({ text: reply, isSimulated: false });
      } catch (geminiError: any) {
        console.warn(
          "Gemini API is temporarily unavailable or experiencing high demand. Falling back to local D-Pharma simulation.",
          geminiError?.message || geminiError
        );
        // Continue below to simulated matches...
      }
    }

    // Simulated Fallback matching logic
    const query = prompt.toLowerCase();
    let bestMatch = simulatedAnswers.find((item) =>
      item.keywords.some((kw) => query.includes(kw))
    );

    if (bestMatch) {
      return res.json({
        text: bestMatch.answer + "\n\n*(Note : Réponse fournie instantanément par notre IA de secours de proximité djiboutienne)*",
        isSimulated: true
      });
    }

    // Default polite response if no keywords matched and AI is offline
    const defaultAnswer = `Bonjour ! Je suis l'Assistant intelligent de D-Pharma à Djibouti. 

Je peux vous renseigner sur la posologie et le prix local des médicaments comme le **Doliprane**, l'**Ibuprofène**, l'**Amoxicilline** ou les pastilles **Strepsils**, ainsi que sur la localisation des **pharmacies de garde** (comme la Pharmacie Centrale ou d'Ambouli) et notre service de **livraison à domicile** (400 FDJ).

Que souhaitez-vous savoir aujourd'hui ?
\n*(Note : Configurez votre API Key Gemini dans le panneau Settings de Google AI Studio pour activer l'intelligence illimitée de ce chatbot)*`;

    return res.json({ text: defaultAnswer, isSimulated: true });
  });

  // Serve static assets in production or boot Vite dev middleware
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[D-PHARMA] Server running on http://0.0.0.0:${PORT} (Production: ${isProduction})`);
  });
}

startServer();
