import React from "react";
import { Send, MessageSquareCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { trackConversionEvent } from "@/lib/analytics";

export const EnrollmentSteps: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Contato Inicial",
      subtitle: "Rápido e sem compromisso",
      description:
        "Você preenche o formulário nesta página ou nos chama direto no WhatsApp com suas dúvidas.",
      icon: Send,
    },
    {
      step: "02",
      title: "Conversa de Alinhamento",
      subtitle: "Escuta atenta e individual",
      description:
        "Entendemos a idade, histórico com o idioma, rotina e o objetivo que o aluno deseja alcançar.",
      icon: MessageSquareCheck,
    },
    {
      step: "03",
      title: "Aula Experimental / Vivência",
      subtitle: "A experiência na prática",
      description:
        "O aluno participa de um encontro para conhecer os professores, o ambiente e a dinâmica real.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Matrícula & Início Suave",
      subtitle: "Suporte completo à família",
      description:
        "Definição da turma ideal, alinhamento dos horários e boas-vindas com todo o acompanhamento pedagógico.",
      icon: CheckCircle2,
    },
  ];

  const handleStepCta = () => {
    trackConversionEvent("click_cta_hero_primary", { section: "enrollment_steps" });
    const formEl = document.getElementById("formulario");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="passo-a-passo" className="py-20 md:py-28 bg-gea-slate-50 border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-gea-red" />
            <span>Processo Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Começar na GEA é simples e sem complicação
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Sem processos burocráticos ou taxas escondidas. Em apenas 4 passos tranquilos, você ou seu filho iniciam uma jornada sólida com o idioma.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-7 border border-gea-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gea-navy text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gea-slate-100 flex items-center justify-center text-gea-slate-500">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gea-navy mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-gea-red mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-gea-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gea-slate-100 text-[11px] font-bold text-gea-slate-400 uppercase tracking-wider">
                  Etapa {index + 1} de 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Central CTA button below steps */}
        <div className="text-center">
          <Button
            variant="primaryRed"
            size="lg"
            onClick={handleStepCta}
            className="tap-target gap-2 font-bold shadow-lg shadow-gea-red/25 hover:shadow-gea-red/40"
          >
            <span>Dar o primeiro passo agora</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};
