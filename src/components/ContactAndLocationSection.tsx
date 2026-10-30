import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Coffee,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import {
  trackConversionEvent,
  getWhatsAppUrl,
  GEA_ADDRESS,
  GEA_PHONE_FORMATTED,
} from "@/lib/analytics";

interface ContactSectionProps {
  selectedAgeGroup?: string;
}

export const ContactAndLocationSection: React.FC<ContactSectionProps> = ({
  selectedAgeGroup,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    ageGroup: "kids",
    language: "ingles",
    shift: "flexivel",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (selectedAgeGroup) {
      setFormData((prev) => ({ ...prev, ageGroup: selectedAgeGroup }));
    }
  }, [selectedAgeGroup]);

  // Phone masking: (99) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "");
    if (raw.length > 11) raw = raw.slice(0, 11);

    let masked = "";
    if (raw.length <= 2) {
      masked = raw.length > 0 ? `(${raw}` : "";
    } else if (raw.length <= 6) {
      masked = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    } else if (raw.length <= 10) {
      masked = `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    } else {
      masked = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
    }

    setFormData((prev) => ({ ...prev, phone: masked }));
    if (raw.length >= 10) {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rawPhone = formData.phone.replace(/\D/g, "");
    if (rawPhone.length < 10) {
      setPhoneError("Por favor, digite um número de WhatsApp válido com DDD.");
      return;
    }

    // Trigger centralized conversion analytics
    trackConversionEvent("form_submit_lead", {
      name: formData.fullName,
      ageGroup: formData.ageGroup,
      language: formData.language,
      shift: formData.shift,
      phone: formData.phone,
    });

    setIsSubmitted(true);
  };

  const handleOpenWhatsAppFromSuccess = () => {
    const ageLabelMap: Record<string, string> = {
      baby: "Baby (1-4 anos)",
      kids: "Kids (5-9 anos)",
      preteen: "Preteen (10-12 anos)",
      teens: "Teens (13-17 anos)",
      adults: "Adultos (18+)",
      espanhol: "Espanhol & Conversação",
    };

    const text = `Olá GEA! Acabei de enviar meu formulário de aula experimental no site.\n\n` +
      `*Nome:* ${formData.fullName}\n` +
      `*Interesse:* ${formData.language.toUpperCase()}\n` +
      `*Faixa:* ${ageLabelMap[formData.ageGroup] || formData.ageGroup}\n` +
      `*Turno preferido:* ${formData.shift}\n` +
      `Gostaria de confirmar os horários disponíveis!`;

    trackConversionEvent("form_redirect_whatsapp", { name: formData.fullName });
    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  const handleDirectWhatsAppClick = () => {
    trackConversionEvent("click_cta_whatsapp_contact");
    window.open(
      getWhatsAppUrl("Olá! Gostaria de agendar uma visita para tomar um café e conhecer a escola GEA."),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="formulario"
      className="py-20 md:py-28 bg-[#0F2547] text-white relative overflow-hidden"
    >
      {/* Visual background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gea-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gea-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Column 1: Human invite, Direct WhatsApp, Address & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gea-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Coffee className="w-3.5 h-3.5" />
                <span>Venha nos visitar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Venha conhecer a GEA de perto
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Nossas portas estão abertas para receber você e sua família. Venha tomar um café conosco, conhecer nossas salas, conversar com nossos coordenadores e tirar todas as dúvidas com tranquilidade.
              </p>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div>
              <button
                onClick={handleDirectWhatsAppClick}
                className="tap-target w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/40 active:scale-98"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                <span>Chamar no WhatsApp agora</span>
              </button>
            </div>

            {/* Address & Hours Information Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gea-yellow text-gea-navy flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5 text-gea-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5">
                    Endereço da Unidade
                  </h4>
                  <p className="text-sm text-white/80 leading-snug">
                    {GEA_ADDRESS}
                  </p>
                  <span className="text-xs text-gea-yellow mt-1 block">
                    Fácil acesso, estacionamento no local e total segurança.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5">
                    Horário da Secretaria
                  </h4>
                  <p className="text-sm text-white/80">
                    Segunda a Sexta: 08h às 20h30 <br />
                    Sábados: 08h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5">
                    Telefone & Atendimento
                  </h4>
                  <p className="text-sm text-white/80 font-mono">
                    {GEA_PHONE_FORMATTED}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-md bg-white/5 aspect-[16/8] relative">
              <iframe
                title="Localização da Escola GEA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975768853755!2d-46.65657112379768!3d-23.56134657880092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter contrast-90 opacity-90"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-xs text-[11px] text-white px-2 py-0.5 rounded">
                GEA Idiomas • Unidade Principal
              </div>
            </div>

          </div>

          {/* Column 2: High Conversion White Card Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl text-gea-navy border border-gea-slate-200">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gea-red/10 text-gea-red text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Aula Experimental 100% Gratuita</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gea-navy">
                      Agende uma conversa ou aula experimental
                    </h3>
                    <p className="text-xs sm:text-sm text-gea-slate-600 mt-1">
                      Preencha os dados abaixo. Nossa equipe pedagógica entrará em contato com você sem nenhuma pressão de vendas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Responsável / Aluno */}
                    <div>
                      <label className="block text-xs font-bold text-gea-navy uppercase tracking-wider mb-1.5">
                        Nome do responsável (ou do aluno, se maior) <span className="text-gea-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo ou Maria Oliveira"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gea-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gea-navy text-gea-navy font-medium placeholder:text-gea-slate-400 bg-gea-slate-50/50"
                      />
                    </div>

                    {/* Faixa Etária */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gea-navy uppercase tracking-wider mb-1.5">
                          Faixa etária do aluno <span className="text-gea-red">*</span>
                        </label>
                        <select
                          value={formData.ageGroup}
                          onChange={(e) =>
                            setFormData({ ...formData, ageGroup: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gea-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gea-navy text-gea-navy font-semibold bg-gea-slate-50/50"
                        >
                          <option value="baby">GEA Baby (1 a 4 anos)</option>
                          <option value="kids">GEA Kids (5 a 9 anos)</option>
                          <option value="preteen">GEA Preteen (10 a 12 anos)</option>
                          <option value="teens">GEA Teens (13 a 17 anos)</option>
                          <option value="adults">GEA Adultos (18+ anos)</option>
                          <option value="espanhol">Espanhol & Conversação</option>
                        </select>
                      </div>

                      {/* Idioma */}
                      <div>
                        <label className="block text-xs font-bold text-gea-navy uppercase tracking-wider mb-1.5">
                          Idioma de interesse <span className="text-gea-red">*</span>
                        </label>
                        <select
                          value={formData.language}
                          onChange={(e) =>
                            setFormData({ ...formData, language: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gea-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gea-navy text-gea-navy font-semibold bg-gea-slate-50/50"
                        >
                          <option value="ingles">Inglês</option>
                          <option value="espanhol">Espanhol</option>
                          <option value="conversacao">Conversação Intensiva</option>
                          <option value="ambos">Inglês + Espanhol</option>
                        </select>
                      </div>
                    </div>

                    {/* Turno e WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gea-navy uppercase tracking-wider mb-1.5">
                          Turno de preferência
                        </label>
                        <select
                          value={formData.shift}
                          onChange={(e) =>
                            setFormData({ ...formData, shift: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gea-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gea-navy text-gea-navy font-semibold bg-gea-slate-50/50"
                        >
                          <option value="flexivel">Flexível / Qualquer turno</option>
                          <option value="manha">Manhã</option>
                          <option value="tarde">Tarde</option>
                          <option value="noite">Noite</option>
                          <option value="sabado">Sábado</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gea-navy uppercase tracking-wider mb-1.5">
                          WhatsApp com DDD <span className="text-gea-red">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full px-4 py-3 rounded-xl border border-gea-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gea-navy text-gea-navy font-medium placeholder:text-gea-slate-400 bg-gea-slate-50/50"
                        />
                        {phoneError && (
                          <p className="text-xs text-gea-red mt-1 font-semibold">
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* LGPD notice */}
                    <div className="pt-2 text-[11px] text-gea-slate-500 leading-relaxed flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Usaremos seus dados exclusivamente para entrar em contato sobre os cursos e agendamento na GEA, respeitando sua privacidade segundo a LGPD.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="primaryRed"
                        size="lg"
                        className="tap-target w-full text-base font-extrabold shadow-lg shadow-gea-red/30 hover:shadow-gea-red/50 transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Quero conhecer a GEA</span>
                      </Button>
                    </div>

                  </form>
                </>
              ) : (
                /* Post-Submission Friendly Success State */
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-gea-navy mb-3">
                    Recebemos seus dados com sucesso!
                  </h3>

                  <p className="text-sm text-gea-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
                    Nossa equipe pedagógica entrará em contato pelo WhatsApp informado (<strong>{formData.phone}</strong>) em breve para confirmar o melhor horário da aula experimental de <strong>{formData.fullName}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-gea-slate-50 border border-gea-slate-200 mb-6 text-left text-xs text-gea-slate-600 space-y-1">
                    <div className="font-bold text-gea-navy mb-1">
                      Resumo da sua solicitação:
                    </div>
                    <div>• <strong>Nome:</strong> {formData.fullName}</div>
                    <div>• <strong>Idioma:</strong> {formData.language.toUpperCase()}</div>
                    <div>• <strong>Turno preferido:</strong> {formData.shift}</div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs text-gea-slate-500">
                      Quer adiantar a conversa agora mesmo sem esperar?
                    </p>
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppFromSuccess}
                      className="tap-target w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Falar no WhatsApp com meus dados preenchidos</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-gea-slate-500 hover:text-gea-navy font-semibold underline pt-2"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
