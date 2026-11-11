import React, { useState } from "react";
import { Button } from "./ui/button";
import { trackConversionEvent } from "@/lib/analytics";
import {
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface CourseData {
  id: string;
  name: string;
  category: "baby" | "kids" | "preteen" | "teens" | "adults" | "espanhol";
  targetAge: string;
  ageBadgeColor: string;
  subtitle: string;
  description: string;
  highlights: string[];
  schedule: string;
  format: string;
  image: string;
  imageAlt: string;
}

export const coursesData: CourseData[] = [
  {
    id: "baby",
    name: "GEA Baby",
    category: "baby",
    targetAge: "1 a 4 anos",
    ageBadgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    subtitle: "Estímulos sensoriais e musicalização",
    description:
      "Primeiros contatos lúdicos e acolhedores com o idioma através de canções, histórias visuais, jogos de movimento e estímulos que despertam a escuta natural da criança.",
    highlights: [
      "Ambiente seguro e lúdico",
      "Musicalização e contação de histórias",
      "Desenvolvimento da percepção sonora e vocabulário inicial",
    ],
    schedule: "2x na semana • 45 min",
    format: "Presencial • Máx. 6 a 8 crianças",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Crianças em roda com professora em atividade lúdica de idioma",
  },
  {
    id: "kids",
    name: "GEA Kids",
    category: "kids",
    targetAge: "5 a 9 anos",
    ageBadgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    subtitle: "Aprendizado natural e criatividade",
    description:
      "Aprendizado natural com jogos de raciocínio, projetos criativos e pequenas conversas. A criança constrói repertório de fala e pronúncia sem bloqueios ou pressões.",
    highlights: [
      "Jogos interativos e contação de histórias",
      "Projetos manuais e artísticos em inglês",
      "Confiança para soltar a voz sem medo de errar",
    ],
    schedule: "2x na semana • 60 min",
    format: "Presencial • Turmas até 8 alunos",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Alunos infantis sorridentes em mesa de trabalho criativo",
  },
  {
    id: "preteen",
    name: "GEA Preteen",
    category: "preteen",
    targetAge: "10 a 12 anos",
    ageBadgeColor: "bg-sky-100 text-sky-900 border-sky-200",
    subtitle: "Transição dinâmica e comunicação ativa",
    description:
      "Fase de transição com dinâmicas em grupo, desafios cooperativos e situações do cotidiano que estimulam o pensamento crítico e a fala constante entre os colegas.",
    highlights: [
      "Atividades práticas que conectam com o dia a dia",
      "Estímulo à cooperação e expressão verbal",
      "Leituras dinâmicas e construção de frases completas",
    ],
    schedule: "2x na semana • 75 min",
    format: "Presencial • Turmas até 10 alunos",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Jovens estudantes participando de dinâmica de aprendizado",
  },
  {
    id: "teens",
    name: "GEA Teens",
    category: "teens",
    targetAge: "13 a 17 anos",
    ageBadgeColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    subtitle: "Conectado ao universo jovem e autonomia",
    description:
      "Inglês contextualizado com temas atuais, debates de cultura pop, tecnologia, cinema e preparação acadêmica com autonomia para defender ideias.",
    highlights: [
      "Debates sobre temas atuais e cultura",
      "Gravação de podcasts e projetos temáticos",
      "Base sólida para intercâmbios, ENEM e exames futuros",
    ],
    schedule: "2x na semana • 75 min ou Sábados 2h30",
    format: "Presencial • Turmas até 10 alunos",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Adolescentes conversando e estudando juntos em ambiente moderno",
  },
  {
    id: "adults",
    name: "GEA Adultos",
    category: "adults",
    targetAge: "18+ anos",
    ageBadgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    subtitle: "Objetivos reais: carreira, viagens e fala prática",
    description:
      "Metodologia focada nas reais necessidades do adulto: destravar a fala em reuniões, preparar-se para viagens e construir um vocabulário útil e aplicável imediatamente.",
    highlights: [
      "Simulações de reuniões, viagens e conversas cotidianas",
      "Ambiente maduro, acolhedor e sem constrangimento",
      "Horários flexíveis (manhã, noite e sábados)",
    ],
    schedule: "2x na semana • 75 min ou Sábados intensivo",
    format: "Presencial • Turmas reduzidas",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Adultos em conversa descontraída de negócios e idiomas",
  },
  {
    id: "espanhol",
    name: "Espanhol & Conversação",
    category: "espanhol",
    targetAge: "Jovens e Adultos",
    ageBadgeColor: "bg-orange-100 text-orange-900 border-orange-200",
    subtitle: "Imersão cultural e prática intensiva da fala",
    description:
      "Aprenda o segundo idioma mais falado no mundo com ênfase na riqueza cultural dos países hispânicos e práticas conversacionais para viajar ou se destacar no mercado.",
    highlights: [
      "Prática intensiva de pronúncia e fluidez",
      "Riqueza cultural hispânica (literatura, cinema e música)",
      "Módulos específicos de conversação prática",
    ],
    schedule: "2x na semana • 60 min ou 1x intensivo",
    format: "Presencial • Turmas reduzidas",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=75&fm=webp",
    imageAlt: "Grupo multicultural praticando conversação em espanhol",
  },
];

interface CoursesSectionProps {
  onSelectCourse?: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = React.memo(({ onSelectCourse }) => {
  const [activeTab, setActiveTab] = useState<string>("todos");

  const filteredCourses =
    activeTab === "todos"
      ? coursesData
      : coursesData.filter((c) => {
          if (activeTab === "infantil") return c.category === "baby" || c.category === "kids";
          if (activeTab === "jovens") return c.category === "preteen" || c.category === "teens";
          if (activeTab === "adultos") return c.category === "adults";
          if (activeTab === "espanhol") return c.category === "espanhol";
          return true;
        });

  const handleConsultCourse = (course: CourseData) => {
    trackConversionEvent("click_cta_course", {
      courseId: course.id,
      courseName: course.name,
      targetAge: course.targetAge,
    });

    if (onSelectCourse) {
      onSelectCourse(course.id);
    }

    const formEl = document.getElementById("formulario");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cursos" className="py-20 md:py-28 bg-white border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gea-red" />
            <span>Nossos Cursos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Um caminho pensado para cada fase do desenvolvimento
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Nosso ensino respeita a maturidade cognitiva, os interesses e os objetivos de cada faixa etária. Aqui, o aluno não é pressionado: ele é guiado com respeito e encorajamento.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {[
              { id: "todos", label: "Todos os Cursos" },
              { id: "infantil", label: "Baby & Kids (1-9 anos)" },
              { id: "jovens", label: "Preteen & Teens (10-17 anos)" },
              { id: "adultos", label: "Adultos (18+)" },
              { id: "espanhol", label: "Espanhol & Conversação" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gea-navy text-white shadow-md scale-[1.02]"
                    : "bg-gea-slate-100 text-gea-slate-600 hover:bg-gea-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl border border-gea-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gea-slate-100">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={480}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Age Badge Floating */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold shadow-sm border ${course.ageBadgeColor}`}
                  >
                    {course.targetAge}
                  </span>
                </div>

                {/* Subtle Tag Overlay */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[9px] backdrop-blur-sm font-mono">
                  [Inserir foto real autorizada da GEA]
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gea-navy group-hover:text-gea-red transition-colors flex items-center justify-between">
                    <span>{course.name}</span>
                  </h3>
                  <p className="text-xs font-semibold text-gea-red uppercase tracking-wide mt-0.5">
                    {course.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gea-slate-600 leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {course.highlights.map((item, idx) => (
                    <div key={`${course.id}-highlight-${idx}`} className="flex items-start gap-2 text-xs text-gea-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Meta Details: Schedule and Format */}
                <div className="mt-auto pt-4 border-t border-gea-slate-100 space-y-2 text-xs text-gea-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gea-navy/70" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gea-navy/70" />
                    <span>{course.format}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-5">
                  <button
                    onClick={() => handleConsultCourse(course)}
                    className="w-full tap-target py-3 px-4 rounded-xl bg-gea-slate-100 hover:bg-gea-red hover:text-white text-gea-navy text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Consultar horários para esta faixa etária</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gea-slate-50 via-white to-gea-slate-50 border border-gea-slate-200 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-gea-navy mb-1">
              Ficou em dúvida sobre qual turma melhor se adapta ao seu caso?
            </h4>
            <p className="text-xs sm:text-sm text-gea-slate-600">
              Nossa coordenação pedagógica faz uma conversa sem compromisso para indicar a melhor opção.
            </p>
          </div>
          <Button
            variant="default"
            size="default"
            onClick={() => {
              trackConversionEvent("click_cta_course", { action: "guidance_conversation" });
              const el = document.getElementById("formulario");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 font-bold"
          >
            Fazer orientação gratuita
          </Button>
        </div>

      </div>
    </section>
  );
});
CoursesSection.displayName = "CoursesSection";
