import React from "react";
import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { GEA_ADDRESS, GEA_PHONE_FORMATTED, GEA_PHONE_RAW } from "@/lib/analytics";

// Clean SVG social icons
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = React.memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09172d] text-white pt-16 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <Logo isLight className="h-10" />
            <p className="text-sm text-white/90 leading-relaxed max-w-sm mt-3">
              Aprender idiomas com prática, acompanhamento próximo e experiências reais que ajudam o aluno a usar o idioma com mais confiança na vida.
            </p>
            <div className="flex items-center gap-3 pt-2" role="group" aria-label="Redes sociais da GEA">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da GEA Idiomas"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-gea-red hover:text-white flex items-center justify-center transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#09172d]"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da GEA Idiomas"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-gea-red hover:text-white flex items-center justify-center transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#09172d]"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da GEA Idiomas"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-gea-red hover:text-white flex items-center justify-center transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#09172d]"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da GEA Idiomas"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-gea-red hover:text-white flex items-center justify-center transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#09172d]"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <nav className="lg:col-span-3 space-y-3" aria-label="Links rápidos do rodapé">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gea-yellow">
              Navegação
            </h3>
            <ul className="space-y-1 text-sm text-white/90">
              <li>
                <a
                  href="#cursos"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  Cursos por Faixa Etária
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  Metodologia Pedagógica
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  Diferenciais Reais
                </a>
              </li>
              <li>
                <a
                  href="#escola"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  A Escola & Projetos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  Depoimentos de Famílias
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </nav>

          {/* Contacts & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gea-yellow">
              Atendimento & Secretaria
            </h3>
            <div className="space-y-2.5 text-sm text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gea-yellow shrink-0 mt-0.5" aria-hidden="true" />
                <span>{GEA_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gea-yellow shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${GEA_PHONE_RAW}`}
                  className="hover:text-white hover:underline transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  {GEA_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gea-yellow shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contato@geaidiomas.com.br"
                  className="hover:text-white hover:underline transition-colors min-h-[44px] inline-flex items-center px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
                >
                  contato@geaidiomas.com.br
                </a>
              </div>
            </div>
            <div className="pt-2 text-xs text-white/75">
              Segunda a Sexta: 08h às 20h30 | Sábados: 08h às 14h
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <div>
            © {new Date().getFullYear()} GEA Idiomas. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-white/75">
            <span>Ensinando idiomas com afeto e consistência pedagógica.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gea-yellow hover:text-white font-bold transition-colors min-h-[44px] px-3 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gea-yellow"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
