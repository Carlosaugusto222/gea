import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackConversionEvent, getWhatsAppUrl } from "@/lib/analytics";

export const FloatingWhatsApp: React.FC = React.memo(() => {
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
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-end gap-3 select-none"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div
          role="status"
          className="hidden sm:flex items-center gap-1 bg-white text-gea-navy pl-3 pr-1 py-0.5 rounded-2xl shadow-xl border border-gea-slate-200 text-xs font-bold animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" aria-hidden="true" />
          <button
            type="button"
            onClick={handleClick}
            className="min-h-[44px] px-2 flex items-center font-bold text-gea-navy hover:text-gea-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy rounded-lg"
          >
            Dúvidas? Fale com a GEA
          </button>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gea-slate-600 hover:text-gea-navy min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            aria-label="Fechar aviso de atendimento"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Abrir conversa no WhatsApp com a GEA Idiomas"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-700 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
      </button>
    </aside>
  );
});
FloatingWhatsApp.displayName = "FloatingWhatsApp";
