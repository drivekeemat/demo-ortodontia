import { site } from "@/config/clinic";

/** Eventos de conversão. Nenhum script externo é instalado; ver `track`. */
export type TrackEvent = "click_whatsapp" | "click_phone" | "click_instagram" | "click_directions" | "click_treatment";
export type TrackContext = { event_location?: string | undefined; treatment?: string | undefined };

const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;

/** Lê UTMs / gclid / fbclid da URL atual, em memória. Não persiste nem envia nada. */
export function getUtmParams(search = typeof window === "undefined" ? "" : window.location.search) {
  const params = new URLSearchParams(search);
  const out: Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>> = {};
  for (const k of ATTRIBUTION_KEYS) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

/**
 * Ponto único de disparo. Hoje só empurra para window.dataLayer SE ele já existir
 * (ou seja, quando um GTM/GA4 for instalado com consentimento no futuro).
 */
export function track(event: TrackEvent, ctx: TrackContext = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(w.dataLayer)) return;
  w.dataLayer.push({ event, event_name: event, ...ctx });
}

/** Mensagens predefinidas por contexto. */
export function buildWhatsAppMessage(ctx: { topic?: string | undefined } = {}) {
  return ctx.topic
    ? `Olá! Conheci a clínica pelo site e gostaria de informações sobre ${ctx.topic}.`
    : `Olá! Conheci a ${site.name} pelo site e gostaria de conversar com a equipe.`;
}

const digits = (s: string) => s.replace(/\D/g, "");

/** `null` quando o número não está configurado — nunca gera link inválido. */
export function whatsappUrl(message = buildWhatsAppMessage(), number = site.whatsapp) {
  const n = digits(number);
  if (n.length < 10) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

export function phoneUrl(phone = site.phone) {
  const n = digits(phone);
  return n.length >= 8 ? `tel:+${n.startsWith("55") ? n : `55${n}`}` : null;
}

export function instagramUrl(user = site.instagram) {
  const u = user.replace(/^@/, "").trim();
  return u ? `https://instagram.com/${u}` : null;
}

export function directionsUrl(address = site.address, mapsUrl = site.mapsUrl) {
  if (mapsUrl) return mapsUrl;
  if (!address.trim()) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${site.city} - ${site.state}`)}`;
}

/** Aviso discreto quando um contato ainda não foi configurado (modo demonstração). */
export function showDemoNotice(text: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("demo-notice", { detail: text }));
}
