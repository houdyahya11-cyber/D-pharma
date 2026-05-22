/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Smartphone, 
  Search, 
  MapPin, 
  Bot, 
  History, 
  Send, 
  Loader2, 
  ShoppingCart, 
  CheckCircle2, 
  PhoneCall, 
  Info,
  ChevronRight,
  ShieldAlert,
  CalendarCheck
} from "lucide-react";
import { MEDICINES_DB, PHARMACIES_DB } from "../data";
import { Medicine, Pharmacy, ChatMessage } from "../types";

export default function LiveDemo() {
  const [focusedPhone, setFocusedPhone] = useState<"meds" | "map" | "chat">("chat"); // default focus on chat of course
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Phone 1: Medication Cart State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [cart, setCart] = useState<{ med: Medicine; qty: number }[]>([]);

  // Phone 2: Map Active Pharmacy
  const [selectedPharm, setSelectedPharm] = useState<string>("pharm-central");

  // Phone 3: Chatbot state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "Bonjour ! Je suis l'Assistant intelligent D-Pharma de Djibouti. Recherchez-vous un médicament, la posologie recommandée pour un traitement, ou une pharmacie de garde ?",
      timestamp: "12:00"
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatSending, setIsChatSending] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Categories helper
  const categories = ["Tous", "Analgésique", "Anti-inflammatoire", "Antiseptique", "Antibiotique"];

  const filteredMeds = MEDICINES_DB.filter((m) => {
    const matchesQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         m.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "Tous" || m.category.includes(selectedCategory);
    return matchesQuery && matchesCat;
  });

  const handleAddToCart = (med: Medicine) => {
    setCart((prev) => {
      const match = prev.find((item) => item.med.id === med.id);
      if (match) {
        return prev.map((item) => item.med.id === med.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { med, qty: 1 }];
    });
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.med.price * item.qty, 0);

  const handleSendChat = async (predefText?: string) => {
    const textToSend = predefText || chatInput;
    if (!textToSend.trim() || isChatSending) return;

    // Append user message
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsChatSending(true);

    try {
      const response = await fetch("/api/pharma-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend })
      });

      if (!response.ok) throw new Error("Server error");
      const data = await response.json();

      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: data.text,
        timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
      };
      setChatMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      // Fallback response inside client just in case
      const errorBotMsg: ChatMessage = {
        id: "bot-err-" + Date.now(),
        sender: "bot",
        text: "Désolé, j'ai rencontré un problème serveur. Notez que la Pharmacie Centrale vous conseille de prendre du Doliprane en cas de fièvre, et de toujours consulter un médecin.",
        timestamp: "Oups"
      };
      setChatMessages((prev) => [...prev, errorBotMsg]);
    } finally {
      setIsChatSending(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-tr from-slate-50 via-white to-emerald-50/20 scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            DÉMONSTRATION INTERACTIVE 📱
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            D-Pharma en action
          </h2>
          <p className="mt-3 font-sans text-slate-600">
            Sélectionnez un téléphone ci-dessous pour zoomer et essayer en direct les fonctionnalités de l'application.
          </p>

          {/* Quick toggle tab buttons for accessibility */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setFocusedPhone("meds")}
              className={`px-3 py-1.5 rounded-lg border text-xs font-display font-bold transition-all cursor-pointer ${
                focusedPhone === "meds" ? "bg-blue-600 text-white border-blue-600 active:scale-95" : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              Phone 1 : Panier & Médicaments
            </button>
            <button
              onClick={() => setFocusedPhone("map")}
              className={`px-3 py-1.5 rounded-lg border text-xs font-display font-bold transition-all cursor-pointer ${
                focusedPhone === "map" ? "bg-blue-600 text-white border-blue-600 active:scale-95" : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              Phone 2 : Localisation GPS
            </button>
            <button
              onClick={() => setFocusedPhone("chat")}
              className={`px-3 py-1.5 rounded-lg border text-xs font-display font-bold transition-all cursor-pointer ${
                focusedPhone === "chat" ? "bg-blue-600 text-white border-blue-600 active:scale-95" : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              Phone 3 : Chatbot IA Gemini
            </button>
          </div>

          {/* Cinematic Interactive Presentation Video Button Integration */}
          <div className="flex flex-col items-center justify-center mt-6">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-[#10B981] to-blue-700 hover:scale-105 active:scale-95 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-emerald-500/20"
            >
              <span className="text-base">🎥</span>
              <span>Visionner la vidéo de démonstration de l'application</span>
            </button>
            <span className="text-[10px] text-slate-500 font-mono mt-2 uppercase tracking-wider">
              D-Pharma Explication Walkthrough • format MP4
            </span>
          </div>
        </div>

        {/* 3D PERSPECTIVE PLAYGROUND STAGE */}
        <div className="flex items-center justify-center min-h-[620px] py-6 relative">
          
          <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 relative">
            
            {/* PHONE 1: LEFT PHONE (MEDICATIONS INVENTORY SEARCH) */}
            <div 
              onClick={() => setFocusedPhone("meds")}
              className={`relative transition-all duration-500 ease-out cursor-pointer z-10 w-72 sm:w-80 h-[560px] ${
                focusedPhone === "meds" 
                  ? "lg:scale-110 lg:translate-x-0 z-30 lg:rotate-y-0 shadow-2xl" 
                  : "lg:scale-90 lg:-rotate-y-12 lg:opacity-60 xl:opacity-75 relative"
              }`}
            >
              {/* Header Badge */}
              <div className="absolute -top-3 left-6 bg-blue-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-40">
                MODULE : COMMANDES
              </div>

              {/* 3D perspective wrapper */}
              <div className="w-full h-full bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-slate-800 rounded-full mb-1"></div>
                </div>

                {/* Inner screen content */}
                <div className="w-full h-full bg-slate-50 rounded-[34px] overflow-hidden relative flex flex-col pt-6 font-sans">
                  
                  {/* Local header banner */}
                  <div className="bg-white px-4 py-2 border-b border-sidebar flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-800 flex items-center gap-1">
                      🛒 D-Pharma Shop
                    </span>
                    <span className="text-[9px] font-mono text-[#10B981] font-semibold bg-emerald-50 px-2 rounded">
                      Djibouti-Ville
                    </span>
                  </div>

                  {/* Body search/catalogue */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 font-sans">
                    
                    {/* Search bar inside screen */}
                    <div className="bg-white rounded-xl border border-slate-100 p-2 flex items-center space-x-2 shadow-2xs">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <input 
                        type="text"
                        placeholder="Chercher paracétamol, doliprane..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none text-[10px] text-slate-800 w-full focus:outline-none"
                      />
                    </div>

                    {/* Category tabs list scrollable */}
                    <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-hide">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-[8.5px] px-2 py-1 rounded-md font-bold whitespace-nowrap scrollbar-hide shrink-0 ${
                            selectedCategory === cat 
                              ? "bg-blue-600 text-white" 
                              : "bg-white text-slate-500 border border-slate-100"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Medicines listings item */}
                    <div className="space-y-2">
                      {filteredMeds.map((med) => (
                        <div key={med.id} className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-3xs flex flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="block text-[10px] font-bold text-slate-900">{med.name}</span>
                              <span className="block text-[7.5px] text-slate-400 font-mono uppercase">{med.category}</span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-[#10B981] bg-emerald-50 px-1 py-0.5 rounded shrink-0">
                              {med.price} FDJ
                            </span>
                          </div>
                          
                          <p className="text-[8px] text-slate-500 mt-1.5 leading-normal truncate">
                            {med.description}
                          </p>

                          {/* Controls to add */}
                          <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center justify-between text-[8px] font-mono">
                            <span className="text-slate-400">Pharmacie : {med.pharmacy}</span>
                            <button
                              onClick={() => handleAddToCart(med)}
                              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
                            >
                              + Ajouter
                            </button>
                          </div>
                        </div>
                      ))}

                      {filteredMeds.length === 0 && (
                        <div className="text-center py-6">
                          <span className="text-xs text-slate-400 block">Aucun médicament trouvé</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Cart Summary block bottom screen */}
                  <div className="bg-white border-t border-slate-100 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-800">
                      <span className="font-bold">Total Panier :</span>
                      <span className="font-extrabold text-[#10B981]">{cartTotal.toLocaleString()} FDJ</span>
                    </div>
                    {cart.length > 0 && (
                      <div className="text-[8px] text-slate-500 font-mono truncate">
                        {cart.length} article(s) : {cart.map((i) => i.med.name + " x" + i.qty).join(", ")}
                      </div>
                    )}
                    <button
                      onClick={() => {
                        if (cart.length === 0) return;
                        alert(`Félicitations ! Simulation de commande de ${cartTotal} FDJ validée via D-Money / Waafi ! Un transporteur prend en charge votre sac.`);
                        setCart([]);
                      }}
                      className="w-full bg-[#10B981] hover:bg-emerald-600 text-white text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>Confirmer la commande (Livraison 400F)</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* PHONE 2: CENTER PHONE (MAP - PHARMACIES LOCATION) */}
            <div 
              onClick={() => setFocusedPhone("map")}
              className={`relative transition-all duration-500 ease-out cursor-pointer z-10 w-72 sm:w-80 h-[560px] ${
                focusedPhone === "map" 
                  ? "lg:scale-110 lg:translate-x-0 z-30 lg:rotate-y-0 shadow-2xl" 
                  : "lg:scale-90 lg:opacity-60 xl:opacity-75 relative"
              }`}
            >
              {/* Header Badge */}
              <div className="absolute -top-3 left-6 bg-teal-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-40">
                MODULE : RECHERCHE PHARMACIE
              </div>

              {/* 3D perspective wrapper */}
              <div className="w-full h-full bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-slate-800 rounded-full mb-1"></div>
                </div>

                {/* Inner screen content */}
                <div className="w-full h-full bg-slate-50 rounded-[34px] overflow-hidden relative flex flex-col pt-6 font-sans text-left">
                  
                  {/* Local header banner */}
                  <div className="bg-white px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-800 flex items-center gap-1">
                      📍 D-Pharma GPS
                    </span>
                    <span className="text-[8px] font-mono text-amber-500 font-semibold bg-amber-50 px-1.5 rounded p-0.5 border border-amber-100">
                      Garde de nuit disponible
                    </span>
                  </div>

                  {/* Simulated Map Canvas */}
                  <div className="h-60 bg-blue-50/70 border-b border-slate-100 relative overflow-hidden flex items-center justify-center">
                    
                    {/* SVG Blueprint grids map backdrop */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_2px,transparent_2px)] [background-size:12px_12px] duration-300"></div>

                    {/* Vector outline paths */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 stroke-slate-400 fill-none" viewBox="0 0 200 200">
                      <line x1="10" y1="50" x2="190" y2="180" strokeWidth="2" strokeDasharray="3" />
                      <line x1="80" y1="10" x2="80" y2="190" strokeWidth="1" />
                      <circle cx="100" cy="100" r="40" strokeWidth="1" strokeDasharray="4" />
                    </svg>

                    {/* Plot coordinates from pharmacy database */}
                    {PHARMACIES_DB.map((pharm) => {
                      const isSelected = selectedPharm === pharm.id;
                      return (
                        <div
                          key={pharm.id}
                          className="absolute group transition-transform hover:scale-125 cursor-pointer"
                          style={{ top: `${pharm.coords.y}%`, left: `${pharm.coords.x}%` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPharm(pharm.id);
                          }}
                        >
                          {/* Pin */}
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isSelected 
                              ? "bg-rose-600 text-white animate-bounce scale-110 shadow-lg shadow-rose-500/20" 
                              : "bg-white border-2 border-blue-500 text-blue-500 shadow-sm"
                          }`}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          
                          {/* Pharmacy name hover pop */}
                          <span className="hidden group-hover:block absolute top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono text-[7px] p-1 rounded whitespace-nowrap z-20">
                            {pharm.name}
                          </span>
                        </div>
                      );
                    })}

                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono font-medium shadow-2xs">
                      Cliquez sur les icones de la carte
                    </span>

                  </div>

                  {/* Active selected pharmacy specifications */}
                  <div className="flex-1 p-3.5 space-y-3 bg-white">
                    {(() => {
                      const p = PHARMACIES_DB.find((item) => item.id === selectedPharm);
                      if (!p) return null;
                      return (
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-xs font-bold text-slate-950 font-display">{p.name}</h4>
                              <p className="text-[8px] text-slate-500 mt-0.5">{p.address}</p>
                            </div>
                            <span className={`text-[8.5px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                              p.isOpen 
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                                : "bg-red-50 text-red-700 border border-red-100"
                            }`}>
                              {p.isOpen ? "Ouvert" : "Fermé"}
                            </span>
                          </div>

                          {/* Real photo of selected pharmacy in Djibouti with high-end framing */}
                          {p.imageUrl && (
                            <div className="h-16 w-full rounded-xl overflow-hidden relative border border-slate-200 shadow-3xs">
                              <img 
                                src={p.imageUrl} 
                                alt={p.name} 
                                className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-110"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-1 px-2 flex items-center justify-between pointer-events-none">
                                <span className="text-[7.5px] text-zinc-200 font-mono font-bold tracking-wider uppercase">Officine Réelle — {p.name}</span>
                                <span className="h-1 w-1 bg-emerald-400 rounded-full animate-ping"></span>
                              </div>
                            </div>
                          )}

                          {/* Logistics metrics */}
                          <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                            <div className="bg-slate-50 p-2 border border-slate-100 rounded-lg">
                              <span className="block text-slate-400 text-[8px] uppercase">DISTANCE</span>
                              <span className="block font-bold mt-0.5 text-slate-800">{p.distance}</span>
                            </div>
                            <div className="bg-slate-50 p-2 border border-slate-100 rounded-lg">
                              <span className="block text-slate-400 text-[8px] uppercase">NUIT DE GARDE</span>
                              <span className={`block font-bold mt-0.5 ${p.isCustomGuard ? "text-amber-600" : "text-slate-500"}`}>
                                {p.isCustomGuard ? "Oui (De Garde)" : "Non"}
                              </span>
                            </div>
                          </div>

                          {/* Quick delivery route notice */}
                          <div className="flex items-center space-x-2 p-2 bg-blue-50/50 rounded-lg border border-blue-100/30 text-[8px] text-[#2563EB] font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Livraison assurée par D-Pharma en 30 min !</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                </div>
              </div>
            </div>

            {/* PHONE 3: RIGHT PHONE (MEDICAL CHATBOT DISCUSSIONS) */}
            <div 
              onClick={() => setFocusedPhone("chat")}
              className={`relative transition-all duration-500 ease-out cursor-pointer z-10 w-72 sm:w-80 h-[560px] ${
                focusedPhone === "chat" 
                  ? "lg:scale-110 lg:translate-x-0 z-30 lg:rotate-y-0 shadow-2xl" 
                  : "lg:scale-90 lg:rotate-y-12 lg:opacity-60 xl:opacity-75 relative"
              }`}
            >
              {/* Header Badge */}
              <div className="absolute -top-3 left-6 bg-purple-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-40">
                MODULE : RECHERCHE INTÉLLIGENTE & CHAT
              </div>

              {/* 3D perspective wrapper */}
              <div className="w-full h-full bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-slate-800 rounded-full mb-1"></div>
                </div>

                {/* Inner screen content */}
                <div className="w-full h-full bg-slate-50 rounded-[34px] overflow-hidden relative flex flex-col pt-6 font-sans text-left">
                  
                  {/* Local header banner */}
                  <div className="bg-white px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                        🤖
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-950">Assistant D-Pharma</span>
                        <span className="block text-[7px] text-emerald-500 font-mono">Modèle Gemini Flash (Actif)</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-100 p-1 rounded font-mono truncate">
                      Djibouti
                    </span>
                  </div>

                  {/* Chat logs area */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 bg-slate-50/50 flex flex-col">
                    
                    {chatMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className={`max-w-[85%] p-3 rounded-2xl text-[9px] leading-relaxed relative ${
                          msg.sender === "user" 
                            ? "bg-blue-600 text-white rounded-tr-none self-end ml-auto" 
                            : "bg-white text-slate-800 rounded-tl-none self-start border border-slate-100 shadow-3xs"
                        }`}
                      >
                        {msg.sender === "bot" && (
                          <span className="block font-bold text-[#2563EB] mb-1 font-sans">D-Pharma Assistant</span>
                        )}
                        <p className="whitespace-pre-line font-medium">{msg.text}</p>
                        <span className="block text-[6.5px] mt-1 text-slate-400 text-right opacity-80">{msg.timestamp}</span>
                      </div>
                    ))}

                    {isChatSending && (
                      <div className="bg-white max-w-[85%] p-3 rounded-2xl rounded-tl-none self-start border border-slate-100 shadow-3xs flex items-center justify-center space-x-2 text-[9px] text-[#2563EB]">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>D-Pharma réfléchit...</span>
                      </div>
                    )}

                    <div ref={chatBottomRef} />
                  </div>

                  {/* Predefined prompt questions for rapid testing */}
                  <div className="px-3 py-1 bg-white border-t border-slate-50 overflow-x-auto whitespace-nowrap flex select-none gap-1.5 scrollbar-hide py-1.5">
                    <button 
                      onClick={() => handleSendChat("Où est la Pharmacie de garde de nuit ?")}
                      className="text-[8px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-2 py-1 rounded-md shrink-0 border border-slate-200"
                    >
                      "Pharmacies de garde ?"
                    </button>
                    <button 
                      onClick={() => handleSendChat("Combien coûte le Doliprane à Djibouti ?")}
                      className="text-[8px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-2 py-1 rounded-md shrink-0 border border-slate-200"
                    >
                      "Prix Doliprane ?"
                    </button>
                    <button 
                      onClick={() => handleSendChat("Proposez-vous la livraison à Balbala ?")}
                      className="text-[8px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-2 py-1 rounded-md shrink-0 border border-slate-200"
                    >
                      "Livraison Balbala ?"
                    </button>
                  </div>

                  {/* Typings controls bar */}
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendChat();
                    }}
                    className="p-2 border-t border-slate-100 bg-white flex items-center space-x-2 shadow-inner"
                  >
                    <input 
                      type="text"
                      placeholder="Demandez posologie, prix..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      disabled={isChatSending}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-[10px] text-slate-800 flex-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <button 
                      type="submit"
                      disabled={isChatSending}
                      className="p-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 cursor-pointer transition-all shrink-0"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </form>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Cinematic Walkthrough Video Lightbox Overlay */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden p-3 max-w-2xl w-full shadow-2xl relative border border-slate-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-2.5 rounded-full z-10 transition-colors cursor-pointer font-bold h-9 w-9 flex items-center justify-center shadow-xs"
            >
              ✕
            </button>
            
            {/* HTML5 Native Video Player */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-inner relative">
              <video 
                src="/video-mp3.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              >
                Votre navigateur ne prend pas en charge la lecture de cette vidéo explicative.
              </video>
            </div>

            {/* Video description metadata */}
            <div className="p-4 text-center">
              <h4 className="font-display font-black text-slate-900 text-base">Walkthrough officiel de l'application D-Pharma</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Apprenez comment D-Pharma connecte instantanément les usagers aux officines de la capitale, fluidifie le repérage de garde et sécurise le parcours patient à Djibouti.
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2 justify-center">
                <span className="text-[8px] font-mono bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full uppercase font-medium">Pitch original</span>
                <span className="text-[8px] font-mono bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full uppercase font-medium">Djibouti HealthTech</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
