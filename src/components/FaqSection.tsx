import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { trackConversionEvent, getWhatsAppUrl } from "@/lib/analytics";

export const FaqSection: React.FC = React.memo(() => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  const faqs = [
    {
      id: "faq-1",
      question: "A partir de qual idade a criança pode começar?",
      answer:
        "Na GEA, recebemos crianças a partir de 3 anos de idade no programa GEA Baby (03 a 06 anos), passando pelo GEA Kids (07 anos a 10), Preteen (11 a 14 anos) e turmas Teen e Adult (a partir de 15 anos). Cada faixa etária possui metodologia, dinâmicas e material apropriados ao seu estágio de desenvolvimento cognitivo e emocional.",
    },
    {
      id: "faq-2",
      question: "Quais são os horários e turnos disponíveis?",
      answer:
        "Oferecemos turmas nos períodos da manhã, tarde, noite e aos sábados. No momento do contato, nossa equipe apresenta as opções disponíveis para a faixa etária e nível de interesse, buscando encaixar no horário mais conveniente para a rotina da família ou do aluno.",
    },
    {
      id: "faq-3",
      question: "Como funcionam os materiais didáticos?",
      answer:
        "Utilizamos materiais atualizados com chancela internacional e alinhamento com o Quadro Comum Europeu (CEFR). Os livros são modernos, coloridos e contextualizados com situações da vida real, complementados por plataformas interativas e conteúdos criados em sala pelos próprios alunos (como o jornal GEA News e o podcast).",
    },
    {
      id: "faq-4",
      question: "Qual é a duração das aulas e a quantidade de alunos por turma?",
      answer:
        "Para crianças pequenas (Baby e Kids), as aulas têm duração de 45 a 60 minutos, respeitando o tempo de foco e atenção da idade. Para pré-adolescentes, jovens e adultos, as aulas variam de 75 minutos (2x na semana) a blocos intensivos de 2h30 aos sábados. Nossas turmas são intencionalmente reduzidas, com média de 6 a 10 alunos por sala, garantindo que o professor escute e oriente cada um com proximidade.",
    },
    {
      id: "faq-5",
      question: "Como funciona a reposição de aulas em caso de falta?",
      answer:
        "Compreendemos que imprevistos acontecem. As faltas justificadas com antecedência podem ser repostas através de plantões pedagógicos com os professores ou acompanhamento guiado dos conteúdos e atividades da semana para garantir que o aluno não perca o ritmo da turma.",
    },
    {
      id: "faq-6",
      question: "Como funcionam os valores, mensalidades e formas de pagamento?",
      answer:
        "Trabalhamos com planos semestrais e anuais com parcelamento facilitado no cartão de crédito ou boleto bancário, além de descontos para irmãos ou membros da mesma família. Prezamos pela clareza: não cobramos taxas ocultas nem taxas abusivas de cancelamento. Apresentamos todos os valores e condições durante a conversa de acolhimento.",
    },
    {
      id: "faq-7",
      question: "Aluno que já estudou antes precisa fazer teste de nível?",
      answer:
        "Sim, mas não é uma prova estressante! Realizamos uma conversa acolhedora de nivelamento com nossa coordenação pedagógica para identificar o que o aluno já domina de fala, compreensão e escrita. O objetivo é unicamente colocá-lo na turma onde ele se sinta desafiado na medida certa, sem tédio e sem ansiedade.",
    },
    {
      id: "faq-8",
      question: "Como funciona o agendamento da aula experimental?",
      answer:
        "A aula experimental é 100% gratuita e sem compromisso. Você preenche o formulário ao lado ou nos envia uma mensagem no WhatsApp. Nossa coordenação entra em contato para alinhar o melhor dia e horário. O aluno participa de uma vivência real com a turma ou faz uma sessão individual de orientação para conhecer o espaço e a metodologia.",
    },
  ];

  const handleFaqWhatsApp = () => {
    trackConversionEvent("click_cta_faq_whatsapp");
    window.open(
      getWhatsAppUrl("Olá! Tenho uma dúvida sobre a GEA que não encontrei no FAQ. Poderiam me ajudar?"),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gea-slate-200/70">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gea-navy/10 text-gea-navy font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gea-red" aria-hidden="true" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gea-navy tracking-tight mb-4">
            Dúvidas Frequentes das Famílias e Alunos
          </h2>
          <p className="text-base sm:text-lg text-gea-slate-600 leading-relaxed font-normal">
            Transparência total para você tomar a melhor decisão para o seu desenvolvimento ou o de seu filho.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="bg-gea-slate-50 rounded-3xl p-6 sm:p-10 border border-gea-slate-200/80 shadow-xs mb-10">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gea-slate-200/60">
            <span className="text-xs text-gea-slate-500 font-medium">
              Clique em uma pergunta para expandir ou retrair
            </span>
            {openItem && (
              <button
                type="button"
                onClick={() => setOpenItem(undefined)}
                className="text-xs font-bold text-gea-red hover:text-gea-navy transition-colors inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white border border-gea-slate-200 shadow-xs hover:border-gea-slate-300"
              >
                <span>Retrair todas</span>
              </button>
            )}
          </div>
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="w-full"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-gea-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Unresolved doubt prompt */}
        <div className="p-6 rounded-2xl bg-white border border-gea-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-bold text-gea-navy">
              Tem alguma dúvida específica que não está aqui?
            </h3>
            <p className="text-xs text-gea-slate-600">
              Converse diretamente com a equipe de atendimento da GEA em tempo real.
            </p>
          </div>
          <button
            onClick={handleFaqWhatsApp}
            className="tap-target px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Tirar dúvida no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
});
FaqSection.displayName = "FaqSection";
