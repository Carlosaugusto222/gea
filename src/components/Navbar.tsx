import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { trackConversionEvent } from "@/lib/analytics";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackConversionEvent("click_cta_header", { location: "fixed_navbar" });
    const formElement = document.getElementById("formulario");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gea-slate-200/80 py-2.5 sm:py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="focus:outline-none focus:ring-2 focus:ring-gea-navy rounded-lg p-0.5"
          aria-label="GEA Idiomas - Início"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-gea-navy/80">
          <a
            href="#cursos"
            className="hover:text-gea-red transition-colors py-1 focus:outline-none focus:text-gea-red"
          >
            Cursos
          </a>
          <a
            href="#metodologia"
            className="hover:text-gea-red transition-colors py-1 focus:outline-none focus:text-gea-red"
          >
            Metodologia
          </a>
          <a
            href="#escola"
            className="hover:text-gea-red transition-colors py-1 focus:outline-none focus:text-gea-red"
          >
            A Escola
          </a>
          <a
            href="#depoimentos"
            className="hover:text-gea-red transition-colors py-1 focus:outline-none focus:text-gea-red"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="hover:text-gea-red transition-colors py-1 focus:outline-none focus:text-gea-red"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Single CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="primaryRed"
            size="default"
            onClick={handleCtaClick}
            className="gap-2 font-bold shadow-md hover:shadow-gea-red/30 transition-all text-sm"
          >
            <Sparkles className="w-4 h-4 text-gea-yellow" />
            <span>Agendar Aula Experimental</span>
          </Button>
        </div>

        {/* Mobile Action & Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleCtaClick}
            className="px-3.5 py-2 rounded-xl bg-gea-red text-white text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Aula Grátis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-gea-navy hover:bg-gea-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gea-navy"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gea-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => handleNavClick("cursos")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Cursos por Faixa Etária
            </button>
            <button
              onClick={() => handleNavClick("metodologia")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Metodologia Pedagógica
            </button>
            <button
              onClick={() => handleNavClick("diferenciais")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Diferenciais da GEA
            </button>
            <button
              onClick={() => handleNavClick("escola")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              A Escola por Dentro
            </button>
            <button
              onClick={() => handleNavClick("depoimentos")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Depoimentos de Famílias
            </button>
            <button
              onClick={() => handleNavClick("passo-a-passo")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Como Ingressar
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-2.5 border-b border-gea-slate-100 text-base"
            >
              Perguntas Frequentes
            </button>
          </nav>

          <div className="mt-5 pt-3">
            <Button
              variant="primaryRed"
              size="lg"
              onClick={handleCtaClick}
              className="w-full text-base font-bold justify-center shadow-lg"
            >
              Agendar Aula Experimental
            </Button>
          </div>
        </div>
      )}
    </header>
  );
});
Navbar.displayName = "Navbar";
