import { site } from "@/config/site";

/** Eventos preparados para GA4 / GTM / Meta Pixel futuramente. */
export type TrackEvent =
  | "page_view"
  | "click_whatsapp"
  | "click_phone"
  | "click_instagram"
  | "view_treatment"
  | "click_directions"
  | "form_submit";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
const STORAGE_KEY = "attribution";

/** Captura UTMs/gclid/fbclid da URL e guarda na sessão. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) found[k] = v;
  });
  if (Object.keys(found).length) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
}

export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Ponto único de disparo de eventos. Conecte GTM/GA4/Pixel aqui. */
export function track(event: TrackEvent, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data, ...getAttribution() });
}

export function whatsappUrl(message = site.whatsappMessage) {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function directionsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address}, ${site.mapsQuery}`)}`;
}
