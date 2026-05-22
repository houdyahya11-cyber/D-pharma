/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PainPoint,
  SolutionCard,
  HowItWorksStep,
  AICapability,
  CompetitiveAdvantage,
  MarketStat,
  CustomerSegment,
  RevenueStream,
  QuarterProjection,
  AcquisitionPhase,
  TeamMember,
  Medicine,
  Pharmacy
} from "./types";

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "pain-1",
    title: "Manque d'outils numériques de santé",
    description: "Manque de solutions numériques pour faciliter l'accès aux services pharmaceutiques.",
    iconName: "smartphone-off"
  },
  {
    id: "pain-2",
    title: "Accès difficile aux traitements",
    description: "Problème d'accès aux traitements pour les personnes occupées ou isolées.",
    iconName: "package-x"
  }
];

export const SOLUTION_CARDS: SolutionCard[] = [
  {
    id: "sol-1",
    title: "🛒 Commande de médicaments en ligne",
    description: "Possibilité d'ajouter des médicaments au panier et de passer une commande depuis l'application.",
    iconName: "shopping-cart"
  },
  {
    id: "sol-2",
    title: "📊 Historique des commandes",
    description: "L'application garde l'historique des médicaments déjà achetés pour faciliter les prochaines commandes.",
    iconName: "history"
  },
  {
    id: "sol-3",
    title: "💊 Rappel de prise de médicaments",
    description: "L'utilisateur peut recevoir des rappels pour prendre ses médicaments à l'heure.",
    iconName: "bell"
  },
  {
    id: "sol-4",
    title: "📍 Localisation des pharmacies",
    description: "L'application permet de trouver les pharmacies proches de l'utilisateur sur une carte.",
    iconName: "map-pin"
  },
  {
    id: "sol-5",
    title: "🚚 Livraison à domicile",
    description: "Les médicaments peuvent être livrés chez l'utilisateur par un livreur.",
    iconName: "truck"
  },
  {
    id: "sol-6",
    title: "💬 Chatbot médical intelligent",
    description: "Un assistant intelligent qui répond aux questions sur la posologie, les effets secondaires et les informations des médicaments.",
    iconName: "bot"
  },
  {
    id: "sol-7",
    title: "💬 Messagerie client-pharmacie",
    description: "Une interface qui permet aux clients et aux pharmacies de discuter directement pour poser des questions ou obtenir des conseils.",
    iconName: "message-square"
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: "Rechercher",
    description: "Utilisez la voix, le scan d'ordonnance, ou la recherche intelligente avec correction automatique pour trouver vos médicaments.",
    iconName: "search"
  },
  {
    stepNumber: 2,
    title: "Commander",
    description: "Ajoutez au panier, payez par mobile money ou à la livraison, et consultez l'historique pour commander à nouveau.",
    iconName: "shopping-bag"
  },
  {
    stepNumber: 3,
    title: "Recevoir",
    description: "Vos médicaments sont livrés rapidement chez vous par un coursier professionnel avec un suivi en temps réel.",
    iconName: "truck"
  },
  {
    stepNumber: 4,
    title: "Suivre",
    description: "Activez vos rappels de posologie automatisés et clavardez directement avec votre pharmaciste pour toute question.",
    iconName: "heart-handshake"
  }
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: "ai-1",
    title: "Recommandation de médicaments",
    description: "L'IA peut recommander des médicaments ou produits pharmaceutiques en fonction des recherches, besoins et achats précédents de l'utilisateur.",
    iconName: "sparkles"
  },
  {
    id: "ai-2",
    title: "Localisation intelligente des pharmacies",
    description: "L'IA peut identifier rapidement les pharmacies les plus proches ou celles de garde en analysant la localisation de l'utilisateur.",
    iconName: "navigation"
  },
  {
    id: "ai-3",
    title: "Correction intelligente de recherche",
    description: "L'IA corrige automatiquement les erreurs dans le nom des médicaments pour proposer le bon produit (ex. 'dolipran' → 'Doliprane').",
    iconName: "keyboard"
  },
  {
    id: "ai-4",
    title: "Chatbot médical thérapeutique",
    description: "Un assistant intelligent répond aux questions des utilisateurs sur la posologie, les effets secondaires et les informations des médicaments.",
    iconName: "bot"
  },
  {
    id: "ai-5",
    title: "Analyse avancée des ordonnances",
    description: "L'IA peut scanner une ordonnance manuscrite, en reconnaître les médicaments et les ajouter automatiquement au panier.",
    iconName: "scan"
  },
  {
    id: "ai-6",
    title: "Reconnaissance vocale intelligente",
    description: "L'IA permet de rechercher un médicament en utilisant la voix, en transformant la parole arabe/somalie/française en texte de recherche.",
    iconName: "mic"
  },
  {
    id: "ai-7",
    title: "Détection prédictive des tendances",
    description: "L'IA analyse les recherches géolocalisées des utilisateurs pour détecter l'augmentation de certaines maladies ou épidémies dans une zone.",
    iconName: "trending-up"
  }
];

export const COMPETITIVE_ADVANTAGES: CompetitiveAdvantage[] = [
  {
    id: "adv-1",
    title: "💊 Disponibilité des médicaments en temps réel",
    description: "Les utilisateurs peuvent vérifier immédiatement si un médicament est en stock dans une pharmacie partenaire avant de se déplacer.",
    iconName: "check-circle"
  },
  {
    id: "adv-2",
    title: "📍 Localisation des pharmacies ouvertes ou de garde",
    description: "Une carte interactive toujours à jour permet de trouver instantanément les pharmacies physiques de garde ouvertes la nuit à Djibouti.",
    iconName: "map"
  },
  {
    id: "adv-3",
    title: "🚚 Livraison de santé spécialisée et rapide",
    description: "Les médicaments sensibles et ordonnances sont livrés de manière sécurisée et rapide directement au domicile du patient.",
    iconName: "zap"
  },
  {
    id: "adv-4",
    title: "💬 Messagerie directe et sécurisée patient-pharmacie",
    description: "Les utilisateurs peuvent discuter directement avec leur pharmacien habituel pour poser des questions ou valider une commande d'ordonnance.",
    iconName: "messages-square"
  },
  {
    id: "adv-5",
    title: "🤖 Intelligence artificielle intégrée",
    description: "Fonctions innovantes :",
    bullets: [
      "Analyse intelligente des ordonnances (OCR medical)",
      "Correction orthographique automatique des médicaments",
      "Recommandations de produits connexes de santé"
    ],
    iconName: "cpu"
  },
  {
    id: "adv-6",
    title: "📋 Suivi intelligent complet des traitements",
    description: "Fonctions d'accompagnement numérique :",
    bullets: [
      "Rappels automatisés de prise de médicaments",
      "Historique d'achat d'ordonnance",
      "Gestion numérique centralisée des prescriptions"
    ],
    iconName: "calendar-check"
  }
];

export const IMPLICIT_COMPARISON = {
  features: [
    { name: "Spécialisation 100% Pharmaceutique", dpharma: true, generalist: false },
    { name: "Vérification des stocks en temps réel", dpharma: true, generalist: false },
    { name: "Scan et OCR d'ordonnance par IA", dpharma: true, generalist: false },
    { name: "Rappels automatiques de posologie", dpharma: true, generalist: false },
    { name: "Messagerie directe avec le pharmacien", dpharma: true, generalist: false },
    { name: "Livraison à domicile respectant la chaîne du froid", dpharma: true, generalist: true },
    { name: "Chatbot médical intelligent", dpharma: true, generalist: false }
  ]
};

export const MARKET_STATS: MarketStat[] = [
  {
    id: "stat-1",
    value: "1,07 M",
    label: "Population totale",
    description: "Djibouti compte environ 1,07 million d'habitants avec une forte densification urbaine."
  },
  {
    id: "stat-2",
    value: "744 K",
    label: "Internautes connectés",
    description: "Environ 744 000 utilisateurs actifs d'internet à Djibouti, soit un taux de pénétration record."
  },
  {
    id: "stat-3",
    value: "70%+",
    label: "Utilisateurs mobiles",
    description: "Plus de 70% de la population utilise quotidiennement un smartphone pour naviguer sur internet."
  },
  {
    id: "stat-4",
    value: "200K–300K",
    label: "Mobile Money",
    description: "Entre 200 000 et 300 000 utilisateurs actifs de solutions de paiement mobile (ex : D-Money, Waafi)."
  }
];

export const CUSTOMER_SEGMENTS: CustomerSegment[] = [
  {
    id: "seg-1",
    title: "Patients et familles",
    description: "Personnes recherchant un accès ultra-rapide aux médicaments, aux informations de santé et aux pharmacies de garde à proximité.",
    ctaText: "Commander",
    iconName: "users",
    hoverColor: "hover:border-[#2563EB]"
  },
  {
    id: "seg-2",
    title: "Personnes âgées / Mobilité réduite",
    description: "Utilisateurs ayant un besoin vital de livraison récurrente de médicaments à domicile sans avoir à se déplacer physiquement.",
    ctaText: "Livraison gratuite",
    iconName: "heart",
    hoverColor: "hover:border-[#10B981]"
  },
  {
    id: "seg-3",
    title: "Professionnels occupés",
    description: "Actifs et cadres qui n'ont pas le temps de visiter plusieurs officines physiques pour trouver leurs traitements d'ordonnance.",
    ctaText: "Gagner du temps",
    iconName: "briefcase",
    hoverColor: "hover:border-amber-500"
  },
  {
    id: "seg-4",
    title: "Pharmacies partenaires",
    description: "Établissements pharmaceutiques qui souhaitent étendre leur patientèle, augmenter leurs ventes et optimiser leur visibilité.",
    ctaText: "Devenir partenaire",
    iconName: "hospital",
    hoverColor: "hover:border-purple-500"
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: "rev-1",
    title: "Commission sur les ventes de médicaments",
    description: "D-Pharma prélève une commission modérée de 4 % par commande réalisée via l'application.",
    details: ["4 % de commission par commande engagée", "Revenus récurrents à chaque transaction de santé"],
    iconName: "coins",
    borderColor: "border-blue-500"
  },
  {
    id: "rev-2",
    title: "Frais de paiement mobile intégrés",
    description: "Frais de transaction mobile money.",
    details: ["2 % reversés aux opérateurs de paiement mobile", "Intégration transparente WAFI / D-MONEY"],
    iconName: "smartphone",
    borderColor: "border-teal-500"
  },
  {
    id: "rev-3",
    title: "Frais de livraison logistique",
    description: "Frais de service logistique fixe pour les livraisons à domicile.",
    details: ["400 FDJ par livraison à domicile", "Flotte de livreurs indépendants affiliés"],
    iconName: "truck",
    borderColor: "border-amber-500"
  },
  {
    id: "rev-4",
    title: "Abonnement Premium (Futur)",
    description: "Compte privilège pour les patients ayant des traitements chroniques nécessitant des avantages exclusifs.",
    details: [
      "Commandes logistiques prioritaires gratuites",
      "Localisation pharmacie de garde avancée",
      "Badge 'Utilisateur vérifié' sur l'officine",
      "Offres exclusives négociées avec les marques"
    ],
    iconName: "crown",
    borderColor: "border-purple-500"
  },
  {
    id: "rev-5",
    title: "Publicité sponsorisée pour pharmacies",
    description: "Mise en avant ciblée d'officines partenaires dans l'application.",
    details: [
      "Missions de promotion des pharmacies de garde",
      "Campagnes publicitaires ciblées sur des produits de parapharmacie"
    ],
    iconName: "megaphone",
    borderColor: "border-rose-500"
  },
  {
    id: "rev-6",
    title: "Offres & Campagnes de Sensibilisation",
    description: "Partenariats avec des laboratoires de santé et le ministère pour diffuser des campagnes de santé publique ciblées.",
    details: [
      "Offres spéciales partenaires en parapharmacie",
      "Revenus publicitaires additionnels de sensibilisation nationale"
    ],
    iconName: "award",
    borderColor: "border-indigo-500"
  }
];

export const FINANCIAL_PROJECTIONS: QuarterProjection[] = [
  {
    quarter: "T1",
    label: "Lancement",
    value: 132000,
    transactionsPerMonth: 100,
    strategy: "Attirer les premiers utilisateurs et pharmacies partenaires à l'aide d'événements physiques."
  },
  {
    quarter: "T2",
    label: "Croissance",
    value: 264000,
    transactionsPerMonth: 200,
    strategy: "Densifier le réseau d'officines et lancer des campagnes publicitaires locales géolocalisées."
  },
  {
    quarter: "T3",
    label: "Diversification",
    value: 828000,
    transactionsPerMonth: 600,
    strategy: "Lancer les produits de parapharmacie spécialisés et les packs santé famille.",
    mix: "Val. moyenne : 1.500 FDJ / Mix de commandes spécialisés"
  },
  {
    quarter: "T4",
    label: "Volume",
    value: 1656000,
    transactionsPerMonth: 1200,
    strategy: "Volume optimal avec l'arrivée des abonnements premium et partenariats entreprises à Djibouti-Ville."
  }
];

export const ACQUISITION_PHASES: AcquisitionPhase[] = [
  {
    phase: "Phase 1",
    timeline: "M1 - M3",
    title: "Lancement",
    userGoal: "Objectif : Attirer 500 premiers utilisateurs actifs",
    color: "from-orange-500 to-amber-500",
    tactics: [
      { label: "Parrainage avec crédits", iconName: "gift" },
      { label: "Teaser viral sur les réseaux sociaux", iconName: "video" },
      { label: "Événements d'activation en pharmacie", iconName: "megaphone" }
    ]
  },
  {
    phase: "Phase 2",
    timeline: "M4 - M6",
    title: "Croissance",
    userGoal: "Objectif : Atteindre 2 000 utilisateurs",
    color: "from-blue-500 to-indigo-500",
    tactics: [
      { label: "Publicités Facebook/Instagram géolocalisées", iconName: "map-pin" },
      { label: "Partenariats universités et centres de santé", iconName: "graduation-cap" },
      { label: "Concours 'Meilleur Utilisateur' avec prix", iconName: "trophy" }
    ]
  },
  {
    phase: "Phase 3",
    timeline: "M7 - M12",
    title: "Consolidation",
    userGoal: "Objectif : Fidéliser 10 000 utilisateurs actifs",
    color: "from-emerald-500 to-teal-500",
    tactics: [
      { label: "Programme de fidélité cashbacks Waafi/D-Money", iconName: "wallet" },
      { label: "Campagne de contenus santé éducatifs sur TikTok", iconName: "smartphone" },
      { label: "Affichage urbain (OOH) et messages Radio RTD", iconName: "radio" }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "EZZALDINE SANAD KHALED",
    role: "Co-fondateur & Développeur Principal D-Pharma",
    quote: "Mon engagement à travers le projet D-Pharma est d'offrir à Djibouti une technologie moderne de pointe, capable de simplifier radicalement l'accès aux officines et d'organiser l'écosystème pharmaceutique local.",
    avatarUrl: "/EZZALDINE SANAD KHALED Etudiant en ATID2-jpg.jpeg",
    linkedinUrl: "https://www.linkedin.com/",
    ringColor: "border-[#2563EB]"
  },
  {
    id: "team-2",
    name: "MOHAMED SOULEIMAN DAHIR",
    role: "Co-fondateur & Spécialiste IA & Cybersécurité",
    quote: "En développant des algorithmes de NLP et de vision pour la reconnaissance vocale multilingue ou la numérisation d'ordonnances, nous créons un bouclier technologique robuste et accessible à tous les citoyens djiboutiens.",
    avatarUrl: "/MOHAMED SOULEIMAN DAHIR   Data Scientist  AI Specialist  Cybersecurity Enthusiast-jpg.jpeg",
    linkedinUrl: "https://www.linkedin.com/",
    ringColor: "border-[#10B981]"
  }
];

// Interactive Demo Datasets
export const MEDICINES_DB: Medicine[] = [
  {
    id: "med-1",
    name: "Doliprane 1000mg",
    category: "Analgésique / Antipyrétique",
    price: 450,
    description: "Soulage la douleur légère à modérée et la fièvre. Idéal en cas de céphalée, état grippal ou courbatures.",
    dosage: "1 comprimé toutes les 6 heures si nécessaire. Ne pas dépasser 4 comprimés par jour.",
    availability: true,
    pharmacy: "Pharmacie Centrale"
  },
  {
    id: "med-2",
    name: "Ibuprofène 400mg",
    category: "Anti-inflammatoire non stéroïdien (AINS)",
    price: 600,
    description: "Traitement de courte durée de la fièvre et des douleurs telles que maux de tête, états grippaux, douleurs dentaires, courbatures et règles douloureuses.",
    dosage: "1 comprimé toutes les 8 heures. À prendre impérativement au milieu du repas.",
    availability: true,
    pharmacy: "Pharmacie du Centre"
  },
  {
    id: "med-3",
    name: "Strepsils Miel Citron",
    category: "Antiseptique local pour la gorge",
    price: 850,
    description: "Pastilles à sucer pour calmer le mal de gorge modéré sans fièvre, l'irritation et la toux sèche.",
    dosage: "3 à 6 pastilles par jour, à sucer lentement sans croquer.",
    availability: true,
    pharmacy: "Pharmacie d'Ambouli"
  },
  {
    id: "med-4",
    name: "Amoxicilline 1g",
    category: "Antibiotique (Pénicilline)",
    price: 1200,
    description: "Antibiotique à large spectre utilisé dans le traitement des infections bactériennes courantes. Nécessite obligatoirement une ordonnance valide.",
    dosage: "1 comprimé matin et soir pendant 6 jours consécutifs. Finir le traitement.",
    availability: true,
    pharmacy: "Pharmacie de Balbala"
  },
  {
    id: "med-5",
    name: "Spasfon Lyoc",
    category: "Antispasmodique",
    price: 700,
    description: "Traitement des douleurs spasmodiques de l'intestin, des voies biliaires, de la vessie et de l'utérus.",
    dosage: "2 lyophilisats oraux au moment de la crise, à laisser fondre sous la langue.",
    availability: false,
    pharmacy: "Pharmacie Centrale"
  }
];

export const PHARMACIES_DB: Pharmacy[] = [
  {
    id: "pharm-central",
    name: "Pharmacie Centrale",
    address: "Boulevard de la République, Djibouti-Ville",
    distance: "150m (Proche de vous)",
    isOpen: true,
    isCustomGuard: true,
    coords: { x: 38, y: 44 },
    imageUrl: "/pharmacie centrale.jpeg"
  },
  {
    id: "pharm-centre",
    name: "Pharmacie du Centre",
    address: "Place de la Mer, Djibouti-Ville",
    distance: "900m",
    isOpen: true,
    isCustomGuard: false,
    coords: { x: 45, y: 35 },
    imageUrl: "/pharmacie centrale.jpeg"
  },
  {
    id: "pharm-ambouli",
    name: "Pharmacie d'Ambouli",
    address: "Avenue Nasser, Quartier Ambouli",
    distance: "2.8km",
    isOpen: true,
    isCustomGuard: true,
    coords: { x: 60, y: 65 },
    imageUrl: "/pharmacie d'ambouli.jpeg"
  },
  {
    id: "pharm-balbala",
    name: "Pharmacie de Balbala",
    address: "Route Nationale 1, face au Marché de Balbala",
    distance: "6.1km (Livraison disponible)",
    isOpen: false,
    isCustomGuard: true,
    coords: { x: 20, y: 80 },
    imageUrl: "/pharmacie de balbala.jpeg"
  },
  {
    id: "pharm-paix",
    name: "Pharmacie de la Paix",
    address: "Avenue Georges Pompidou, Djibouti-Ville",
    distance: "1.4km",
    isOpen: true,
    isCustomGuard: false,
    coords: { x: 50, y: 48 },
    imageUrl: "/pharmacie de la paix.jpeg"
  }
];
