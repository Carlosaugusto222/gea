import React from "react";
import {
  Users,
  HeartHandshake,
  Sparkles,
  MessageCircle,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const DifferentialsSection: React.FC = React.memo(() => {
  const differentials = [
    {
      icon: MessageCircle,
      title: "Aulas práticas com situações do cotidiano",
      description:
        "O aluno não fica apenas completando exercícios de gramática. Simulamos conversas de compras, viagens, entrevistas, apresentações e encontros sociais para que o idioma faça sentido imediato.",
      badge: "Prática Real",
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento próximo junto à família",
      description:
        "Pais e responsáveis não ficam no escuro. Compartilhamos devolutivas pedagógicas frequentes, relatos de participação em aula e orientações de apoio contínuo em casa.",
      badge: "Parceria com os Pais",
    },
    {
      icon: Users,
      title: "Turmas verdadeiramente reduzidas (máx. 8 a 10)",
      description:
        "Não colocamos 20 alunos em uma mesma sala. Com turmas pequenas, o professor escuta cada aluno individualmente, ajusta a pronúncia com carinho e garante que ninguém fique calado.",
      badge: "Atenção Individual",
    },
    {
      icon: Lightbulb,
      title: "Projetos interdisciplinares e imersões culturais",
      description:
        "O idioma ganha vida em podcasts gravados pelos alunos, feiras temáticas, teatro, experimentos culinários e clubes de conversa que tornam o aprendizado memorável e prazeroso.",
      badge: "Vivência Ativa",
    },
    {
      icon: Sparkles,
      title: "Ambiente acolhedor que dissolve a timidez",
      description:
        "Muitas pessoas chegam traumatizadas por métodos antigos que puniam o erro. Na GEA, criamos uma atmosfera calorosa onde errar é celebrado como uma tentativa corajosa de falar.",
      badge: "Sem Pressão",
    },
    {
      icon: ShieldCheck,
      title: "Sem fórmulas milagrosas: evolução sólida e real",
      description:
        "Respeitamos a ciência do aprendizado de línguas. Trabalhamos com metas realistas, consistência pedagógica e acompanhamento que constroem fluência duradoura para o resto da vida.",
      badge: "Ética e Verdade",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-white border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-gea-red" aria-hidden="true" />
            <span>Nossos Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Por que as famílias e alunos escolhem a GEA?
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Mais do que vender um curso, construímos um vínculo de confiança. Veja o que nossos alunos e pais experimentam todos os dias na nossa escola:
          </p>
        </div>

        {/* 6 Grid Blocks */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Diferenciais da GEA">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="group p-8 rounded-2xl bg-gea-slate-50 border border-gea-slate-200/80 hover:bg-white hover:border-gea-navy/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gea-slate-200 flex items-center justify-center text-gea-navy group-hover:bg-gea-navy group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gea-navy mb-3 group-hover:text-gea-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gea-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-gea-slate-200/70 text-xs font-semibold text-gea-slate-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gea-yellow" aria-hidden="true" />
                  <span>Compromisso pedagógico GEA</span>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
});
DifferentialsSection.displayName = "DifferentialsSection";
