// Centralized tracking utility for conversions, CTA clicks and WhatsApp leads

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type ConversionEventName =
  | "click_cta_hero_primary"
  | "click_cta_hero_whatsapp"
  | "click_cta_header"
  | "click_cta_course"
  | "click_cta_whatsapp_floating"
  | "click_cta_whatsapp_contact"
  | "click_cta_faq_whatsapp"
  | "form_submit_lead"
  | "form_redirect_whatsapp";

export function trackConversionEvent(
  eventName: ConversionEventName | string,
  payload?: Record<string, any>
) {
  const timestamp = new Date().toISOString();
  const eventData = {
    event: eventName,
    timestamp,
    ...payload,
  };

  // Safe analytics dispatch without polluting production console
  // Google Analytics 4 (gtag)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, eventData);
    } catch {
      // Discard analytics dispatch errors in production
    }
  }

  // Meta Pixel (fbq)
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (eventName === "form_submit_lead") {
        window.fbq("track", "Lead", eventData);
      } else if (eventName.includes("whatsapp")) {
        window.fbq("trackCustom", "WhatsAppContact", eventData);
      } else {
        window.fbq("trackCustom", eventName, eventData);
      }
    } catch {
      // Discard analytics dispatch errors in production
    }
  }

  // Push to GTM dataLayer if present
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
}

export const GEA_PHONE_RAW = "5511999998888"; // Editable raw WhatsApp number with DDI + DDD
export const GEA_PHONE_FORMATTED = "(11) 99999-8888";
export const GEA_ADDRESS = "Rua das Acácias, 420 - Centro, São Paulo - SP";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${GEA_PHONE_RAW}`;
  if (!message) {
    const defaultMsg = encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos da GEA e agendar uma aula experimental.");
    return `${base}?text=${defaultMsg}`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}
