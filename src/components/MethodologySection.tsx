import React from "react";
import { Headphones, MessageSquare, BookOpen, PenTool, Award, ShieldCheck, Compass, Check } from "lucide-react";

export const MethodologySection: React.FC = () => {
  const skills = [
    {
      icon: Headphones,
      title: "Compreensão Oral (Listening)",
      subtitle: "Treinando o ouvido para a vida real",
      description:
        "O aluno é exposto a diálogos cotidianos, entonações variadas e contextos autênticos. Ele aprende a captar o sentido sem precisar traduzir palavra por palavra na mente.",
      tag: "Natural e Fluido",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-700",
    },
    {
      icon: MessageSquare,
      title: "Fala (Speaking)",
      subtitle: "Destravando a voz sem medo de errar",
      description:
        "Foco conversacional desde o primeiro encontro. Criamos um espaço seguro onde o erro é compreendido como parte natural do aprendizado, estimulando a segurança do aluno.",
      tag: "Prática Ativa",
      color: "from-red-500/10 to-rose-500/10 text-gea-red",
    },
    {
      icon: BookOpen,
      title: "Leitura (Reading)",
      subtitle: "Interpretação rica e contextualizada",
      description:
        "Textos atuais, histórias, notícias e projetos que conectam a linguagem ao mundo prático, ampliando o vocabulário e a compreensão crítica de forma agradável.",
      tag: "Repertório Vivo",
      color: "from-amber-500/10 to-yellow-500/10 text-[#92400E]",
    },
    {
      icon: PenTool,
      title: "Escrita (Writing)",
      subtitle: "Estrutura e expressão com clareza",
      description:
        "Construção de e-mails, redações, mensagens e projetos que consolidam a gramática em uso prático, permitindo que o aluno se expresse por escrito com naturalidade.",
      tag: "Clareza e Estrutura",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-700",
    },
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-gea-slate-50 border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-gea-navy" />
            <span>Abordagem Pedagógica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Como a GEA desenvolve a confiança para se comunicar
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Não prometemos fórmulas mágicas nem decoreba vazia. Nosso método integra as 4 habilidades fundamentais com foco permanente na conversação prática e no bem-estar emocional do aluno.
          </p>
        </div>

        {/* 4 Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gea-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.color} shadow-xs`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gea-slate-100 text-gea-slate-600">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gea-navy mb-1 leading-snug">
                    {skill.title}
                  </h3>
                  <p className="text-xs font-semibold text-gea-red mb-3">
                    {skill.subtitle}
                  </p>
                  <p className="text-sm text-gea-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gea-slate-100 text-xs font-semibold text-gea-navy/70 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Aplicação imediata em aula</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credibility & International Standards Card */}
        <div className="bg-gradient-to-br from-[#0F2547] to-[#153460] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gea-yellow/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gea-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gea-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Award className="w-3.5 h-3.5" />
                <span>Credibilidade & Rigor Pedagógico</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                Alinhamento com o Quadro Comum Europeu de Referência (CEFR)
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Todas as etapas do aprendizado na GEA são mapeadas nos níveis internacionais (A1, A2, B1, B2, C1 e C2). Isso garante que cada ano de estudo corresponda a uma evolução mensurável, reconhecida por universidades e instituições em todo o mundo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-gea-yellow font-extrabold text-xl sm:text-2xl mb-1">
                    CEFR A1 → C2
                  </div>
                  <div className="text-xs text-white/70">
                    Níveis estruturados e transparentes de evolução.
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-gea-yellow font-extrabold text-xl sm:text-2xl mb-1">
                    Sem Decoreba
                  </div>
                  <div className="text-xs text-white/70">
                    Gramática contextualizada com aplicação em situações reais.
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-gea-yellow font-extrabold text-xl sm:text-2xl mb-1">
                    Feedbacks Reais
                  </div>
                  <div className="text-xs text-white/70">
                    Relatórios periódicos de evolução compartilhados com a família.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <ShieldCheck className="w-16 h-16 text-gea-yellow mb-3" />
              <div className="text-lg font-bold mb-1">Metodologia Consistente</div>
              <p className="text-xs text-white/70 leading-relaxed max-w-xs mb-4">
                Professores treinados continuamente na abordagem humanizada e comunicativa da GEA.
              </p>
              <span className="text-[11px] text-white/50 border-t border-white/10 pt-3 w-full">
                Material didático internacionalmente chancelado
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
