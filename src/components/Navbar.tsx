import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { trackConversionEvent } from "@/lib/analytics";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap focus and handle Escape inside mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackConversionEvent("click_cta_header", { location: "fixed_navbar" });
    setMobileMenuOpen(false);
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
          className="min-h-[44px] min-w-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy rounded-lg p-1"
          aria-label="GEA Idiomas - Início"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-gea-navy/90"
        >
          <a
            href="#cursos"
            className="hover:text-gea-red transition-colors py-2 px-1 min-h-[44px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
          >
            Cursos
          </a>
          <a
            href="#metodologia"
            className="hover:text-gea-red transition-colors py-2 px-1 min-h-[44px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
          >
            Metodologia
          </a>
          <a
            href="#escola"
            className="hover:text-gea-red transition-colors py-2 px-1 min-h-[44px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
          >
            A Escola
          </a>
          <a
            href="#depoimentos"
            className="hover:text-gea-red transition-colors py-2 px-1 min-h-[44px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="hover:text-gea-red transition-colors py-2 px-1 min-h-[44px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
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
            className="tap-target gap-2 font-bold shadow-md hover:shadow-gea-red/30 transition-all text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-200" aria-hidden="true" />
            <span>Agendar Aula Experimental</span>
          </Button>
        </div>

        {/* Mobile Action & Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleCtaClick}
            className="px-3.5 py-2 min-h-[44px] rounded-xl bg-gea-red text-white text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
          >
            <span>Aula Grátis</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            ref={toggleButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-gea-navy hover:bg-gea-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal de navegação móvel"
          className="lg:hidden bg-white border-b border-gea-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col space-y-1 pt-2">
            <a
              href="#cursos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("cursos");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Cursos por Faixa Etária
            </a>
            <a
              href="#metodologia"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("metodologia");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Metodologia Pedagógica
            </a>
            <a
              href="#diferenciais"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("diferenciais");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Diferenciais da GEA
            </a>
            <a
              href="#escola"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("escola");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              A Escola por Dentro
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("depoimentos");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Depoimentos de Famílias
            </a>
            <a
              href="#passo-a-passo"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("passo-a-passo");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Como Ingressar
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("faq");
              }}
              className="text-left font-bold text-gea-navy hover:text-gea-red py-3 px-2 rounded-lg border-b border-gea-slate-100 text-base min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-navy"
            >
              Perguntas Frequentes
            </a>
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
