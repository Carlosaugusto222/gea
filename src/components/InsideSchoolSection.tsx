import React from "react";
import { Mic, Newspaper, Palette, Heart, Users2, Sparkles } from "lucide-react";

export const InsideSchoolSection: React.FC = React.memo(() => {
  const experiences = [
    {
      title: "GEA Voice — O Podcast dos Alunos",
      category: "Projeto de Conversação",
      description:
        "Os alunos criam pautas, entrevistam convidados e debatem temas reais no microfone. Isso gera protagonismo e elimina completamente o nervosismo de falar em público.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=640&q=75&fm=webp",
      imageAlt: "Alunos com fones gravando podcast em estúdio da escola",
      icon: Mic,
      size: "lg:col-span-8",
    },
    {
      title: "Espaço Físico Acolhedor",
      category: "Estrutura",
      description:
        "Salas dinâmicas com mesas modulares, cantinho de leitura, materiais táteis e ambientes pensados para cada idade, longe do modelo cinzento tradicional.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=640&q=75&fm=webp",
      imageAlt: "Sala de aula acolhedora, iluminada e colorida",
      icon: Heart,
      size: "lg:col-span-4",
    },
    {
      title: "GEA News — O Jornal da Escola",
      category: "Produção Textual & Mídia",
      description:
        "Jovens e crianças escrevem pequenas matérias, tirinhas e resenhas em inglês e espanhol, transformando a escrita em algo vibrante e lido por toda a comunidade.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=640&q=75&fm=webp",
      imageAlt: "Estudantes redigindo e desenhando jornal da escola",
      icon: Newspaper,
      size: "lg:col-span-4",
    },
    {
      title: "Feira Cultural & Imersões Temáticas",
      category: "Vivência Internacional",
      description:
        "Festivais de gastronomia dos países hispânicos e anglo-saxões, apresentações de música, teatro e cinema onde toda a comunidade escolar participa imersa na língua.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=640&q=75&fm=webp",
      imageAlt: "Feira cultural comunitária com alunos e famílias",
      icon: Palette,
      size: "lg:col-span-4",
    },
    {
      title: "Professores que Inspiram Confiança",
      category: "Equipe Pedagógica",
      description:
        "Educadores apaixonados, fluentes e continuamente capacitados em metodologia comunicativa ativa. Mais do que passar conteúdo, eles acolhem e celebram cada vitória do aluno.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=75&fm=webp",
      imageAlt: "Professora sorridente orientando atenciosamente aluna",
      icon: Users2,
      size: "lg:col-span-4",
    },
  ];

  return (
    <section id="escola" className="py-20 md:py-28 bg-gea-slate-50 border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gea-yellow" />
            <span>Vivência Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Vivências que tiram o idioma do livro
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Na GEA, o aluno não fica preso à gramática mecânica. Ele experimenta o idioma através de projetos expressivos que constroem memórias e geram orgulho na família.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`${item.size} group relative bg-white rounded-3xl overflow-hidden border border-gea-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-auto lg:h-64 overflow-hidden bg-gea-slate-100">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gea-navy text-xs font-bold shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-gea-red" />
                      {item.category}
                    </span>
                  </div>

                  {/* Placeholder label */}
                  <div className="absolute bottom-3 right-4 text-[10px] text-white/80 font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    [Inserir foto real autorizada da GEA]
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gea-navy group-hover:text-gea-red transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gea-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});
InsideSchoolSection.displayName = "InsideSchoolSection";
