import React from "react";
import { Button } from "./ui/button";
import { trackConversionEvent, getWhatsAppUrl } from "@/lib/analytics";
import {
  Sparkles,
  MessageCircle,
  Users,
  CheckCircle2,
  CalendarCheck,
  Award,
} from "lucide-react";

export const Hero: React.FC = React.memo(() => {
  const handlePrimaryCta = () => {
    trackConversionEvent("click_cta_hero_primary", { section: "hero" });
    const formEl = document.getElementById("formulario");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsappCta = () => {
    trackConversionEvent("click_cta_hero_whatsapp", { section: "hero" });
    window.open(
      getWhatsAppUrl("Olá! Vi a página da GEA e gostaria de falar com a equipe sobre os cursos e horários."),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-gea-slate-50 to-gea-slate-100/70 border-b border-gea-slate-200/60">
      {/* Background Subtle Geometric Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-gea-yellow/15 via-gea-red/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gea-navy/5 blur-2xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs sm:text-sm font-bold mb-6 shadow-xs animate-in fade-in duration-300">
              <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>Matrículas abertas • Inglês e Espanhol para todas as idades</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gea-navy leading-[1.15] tracking-tight mb-5">
              Mais do que aprender um idioma: a{" "}
              <span className="relative inline-block text-gea-red">
                confiança
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2.5 text-gea-yellow"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C28 3 70 3 97 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              de usar o que aprende na vida real.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gea-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
              Do Baby aos Adultos, a GEA combina prática conversacional, acompanhamento próximo e projetos reais em um ambiente onde cada aluno evolui no seu ritmo — sem decoreba e sem medo de errar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-9">
              <Button
                variant="primaryRed"
                size="lg"
                onClick={handlePrimaryCta}
                className="tap-target gap-2 text-base font-extrabold shadow-lg shadow-gea-red/25 hover:shadow-gea-red/40 transition-all"
              >
                <CalendarCheck className="w-5 h-5 text-gea-yellow" />
                <span>Agendar aula experimental</span>
              </Button>

              <Button
                variant="outlineNavy"
                size="lg"
                onClick={handleWhatsappCta}
                className="tap-target gap-2 text-base font-bold transition-all border-gea-navy/80"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Falar com a equipe</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gea-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm text-gea-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acompanhamento real com as famílias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Turmas pequenas (máx. 8 a 10)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Alinhamento internacional (CEFR)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Classroom & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3.8] bg-gea-navy/5 overflow-hidden">
                  {/* High quality natural classroom interaction image */}
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=75&fm=webp"
                    alt="Alunos e professora interagindo alegremente em sala de aula de idiomas"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    width={600}
                    height={570}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gea-navy/70 via-transparent to-transparent opacity-80" />

                  {/* Caption & Placeholder Notice */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-left">
                    <div className="flex items-center justify-between text-xs font-semibold text-gea-navy mb-0.5">
                      <span className="flex items-center gap-1 text-gea-red font-bold">
                        <Award className="w-3.5 h-3.5 text-gea-red" />
                        Ambiente Real GEA
                      </span>
                      <span className="text-[10px] text-gea-slate-400 font-normal">
                        [Inserir foto real autorizada da GEA]
                      </span>
                    </div>
                    <p className="text-xs text-gea-slate-600 line-clamp-1">
                      Dinâmica conversacional com projetos práticos e interação constante.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Confidence Badge 1: Foco em conversação */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gea-slate-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gea-yellow/25 text-[#92400E] flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5 text-gea-navy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gea-navy leading-tight">
                    Foco em conversação
                  </div>
                  <div className="text-[11px] text-gea-slate-500">
                    Prática desde o 1º dia
                  </div>
                </div>
              </div>

              {/* Floating Confidence Badge 2: Acompanhamento individualizado */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gea-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gea-red/10 text-gea-red flex items-center justify-center">
                  <Users className="w-5 h-5 text-gea-red" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gea-navy leading-tight">
                    Acompanhamento
                  </div>
                  <div className="text-[11px] text-gea-slate-500">
                    Turmas até 10 alunos
                  </div>
                </div>
              </div>

              {/* Floating Confidence Badge 3: Turmas por faixa etária */}
              <div className="hidden sm:flex absolute -bottom-5 left-8 bg-gea-navy text-white rounded-2xl p-3 shadow-xl border border-white/20 items-center gap-3">
                <div className="flex -space-x-1">
                  <span className="w-6 h-6 rounded-full bg-gea-red flex items-center justify-center text-[10px] font-bold">B</span>
                  <span className="w-6 h-6 rounded-full bg-gea-yellow text-gea-navy flex items-center justify-center text-[10px] font-bold">K</span>
                  <span className="w-6 h-6 rounded-full bg-white text-gea-navy flex items-center justify-center text-[10px] font-bold">T</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">
                    Baby • Kids • Teens • Adultos
                  </div>
                  <div className="text-[10px] text-white/70">
                    Metodologia respeitando cada fase
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";
