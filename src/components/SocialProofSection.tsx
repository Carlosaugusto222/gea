import React from "react";
import { Star, Quote, Heart } from "lucide-react";

export const SocialProofSection: React.FC = React.memo(() => {
  const testimonials = [
    {
      author: "Juliana Mendes",
      role: "Mãe do Lucas (7 anos, GEA Kids)",
      badge: "2 anos na GEA",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&crop=face&w=96&h=96&q=75&fm=webp",
      content:
        "O Lucas era muito tímido para falar qualquer palavra em inglês em outra escola. Na GEA, o acolhimento da professora fez toda a diferença. Ele chega em casa cantando as músicas, me pede para assistir desenhos em inglês e perdeu totalmente o medo de tentar.",
      rating: 5,
    },
    {
      author: "Rodrigo Silveira",
      role: "Aluno GEA Adultos (Engenheiro de Software)",
      badge: "1 ano e meio na GEA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=face&w=96&h=96&q=75&fm=webp",
      content:
        "Eu lia bem em inglês, mas travava na hora de abrir a boca nas reuniões com o time internacional. As aulas práticas e as simulações na GEA me deram a segurança que eu precisava. Sem mágicas: foi consistência semana a semana com professores pacientes.",
      rating: 5,
    },
    {
      author: "Carla & Marcos Ferreira",
      role: "Pais da Sofia (15 anos, GEA Teens)",
      badge: "3 anos na GEA",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=face&w=96&h=96&q=75&fm=webp",
      content:
        "O que mais nos encanta na GEA é a transparência. A coordenação sempre nos dá feedback sincero da evolução da Sofia. No mês passado, viajamos para fora e ela pediu a comida no restaurante e conversou no hotel com total autonomia!",
      rating: 5,
    },
    {
      author: "Felipe Taniguchi",
      role: "Aluno Espanhol & Conversação",
      badge: "10 meses na GEA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=face&w=96&h=96&q=75&fm=webp",
      content:
        "Estudo espanhol para o trabalho com clientes da América Latina. O curso foca muito na fala do dia a dia e nas particularidades culturais, em vez de só decorar regras. O ambiente em sala é super leve e colaborativo.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-gea-red" aria-hidden="true" />
            <span>Histórias de Evolução</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            O que dizem as famílias e alunos que vivem a GEA
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Histórias reais de quem destravou a comunicação, superou a vergonha e hoje usa o idioma com naturalidade no seu dia a dia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-label="Depoimentos de famílias e alunos">
          {testimonials.map((item) => (
            <li
              key={item.author}
              className="p-8 rounded-3xl bg-gea-slate-50 border border-gea-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gea-slate-200 pointer-events-none" aria-hidden="true" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-600 text-amber-600"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-xs font-bold text-gea-slate-700 ml-2" aria-hidden="true">
                    5.0
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-gea-slate-700 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-gea-slate-200/70">
                <img
                  src={item.avatar}
                  alt={`Foto de ${item.author}, ${item.role}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-gea-navy text-sm sm:text-base">
                      {item.author}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-gea-slate-200 text-gea-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gea-slate-600 truncate mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Real Evolution Metrics Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-gea-navy to-[#18386b] text-white p-8 sm:p-10 shadow-lg">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" aria-label="Métricas da escola">
            <li className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-gea-yellow mb-1">
                +12 anos
              </div>
              <div className="text-xs sm:text-sm text-white/90">
                Construindo confiança e acolhimento
              </div>
            </li>

            <li className="p-2 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-gea-yellow mb-1">
                98%
              </div>
              <div className="text-xs sm:text-sm text-white/90">
                Famílias satisfeitas com o acompanhamento
              </div>
            </li>

            <li className="p-2 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-gea-yellow mb-1">
                Máx. 10
              </div>
              <div className="text-xs sm:text-sm text-white/90">
                Alunos por turma para atenção individual
              </div>
            </li>

            <li className="p-2 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-gea-yellow mb-1">
                4 Habilidades
              </div>
              <div className="text-xs sm:text-sm text-white/90">
                Integradas com foco permanente na fala
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
});
SocialProofSection.displayName = "SocialProofSection";
