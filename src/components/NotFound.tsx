import React from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Seo } from "./Seo";
import { getWhatsAppUrl } from "@/lib/analytics";
import { Home, MessageCircle, AlertCircle } from "lucide-react";

interface NotFoundProps {
  onGoHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onGoHome) {
      e.preventDefault();
      onGoHome();
    }
  };

  const handleWhatsAppHelp = () => {
    window.open(
      getWhatsAppUrl("Olá! Estava navegando no site da GEA e encontrei uma página que não existe. Gostaria de ajuda."),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gea-slate-50 text-gea-navy font-sans">
      <Seo
        title="Página Não Encontrada | Erro 404 | Escola GEA Idiomas"
        description="A página que você buscou não foi encontrada no site da GEA Idiomas. Volte para a página inicial e confira nossos cursos de inglês e espanhol para todas idades."
        canonical="https://geaidiomas.com.br/404"
        noindex
      />
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gea-slate-200/80 py-4 px-6">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <a
            href="/"
            onClick={handleHomeClick}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy rounded-lg p-1 min-h-[44px] min-w-[44px] flex items-center"
            aria-label="GEA Idiomas - Início"
          >
            <Logo />
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWhatsAppHelp}
            className="gap-2 text-xs font-bold text-gea-navy"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" aria-hidden="true" />
            <span className="hidden sm:inline">Ajuda pelo WhatsApp</span>
          </Button>
        </div>
      </header>

      {/* Main 404 Message */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gea-slate-200 animate-in fade-in duration-300">
          <div className="w-20 h-20 rounded-2xl bg-gea-red/10 text-gea-red flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10" aria-hidden="true" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-extrabold text-xs uppercase tracking-wider mb-3">
            Erro 404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gea-navy mb-3">
            Página não encontrada
          </h1>

          <p className="text-sm text-gea-slate-600 leading-relaxed mb-8">
            O endereço que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              onClick={handleHomeClick}
              className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy rounded-xl"
            >
              <Button
                variant="primaryRed"
                size="default"
                className="w-full gap-2 font-bold shadow-md"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                <span>Voltar ao início</span>
              </Button>
            </a>

            <Button
              variant="outlineNavy"
              size="default"
              onClick={handleWhatsAppHelp}
              className="w-full sm:w-auto gap-2 font-bold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" aria-hidden="true" />
              <span>Falar no WhatsApp</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gea-slate-200 py-6 text-center text-xs text-gea-slate-600">
        © {new Date().getFullYear()} GEA Idiomas. Todos os direitos reservados.
      </footer>
    </div>
  );
};
