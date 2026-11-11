import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackConversionEvent, getWhatsAppUrl } from "@/lib/analytics";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackConversionEvent("click_cta_whatsapp_floating");
    window.open(
      getWhatsAppUrl("Olá! Estava navegando no site da GEA e gostaria de tirar uma dúvida sobre os cursos."),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div
          onClick={handleClick}
          className="hidden sm:flex items-center gap-2 bg-white text-gea-navy px-3.5 py-2 rounded-2xl shadow-xl border border-gea-slate-200 text-xs font-bold animate-in fade-in slide-in-from-bottom-2 duration-300 cursor-pointer hover:bg-gea-slate-50 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Dúvidas? Fale com a GEA</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gea-slate-400 hover:text-gea-navy ml-1 p-0.5 rounded-full"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Abrir conversa no WhatsApp com a GEA Idiomas"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};
