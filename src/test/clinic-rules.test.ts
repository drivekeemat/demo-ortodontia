import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, directionsUrl, getUtmParams, whatsappUrl } from "@/lib/tracking";

describe("regras Odonto v1.1", () => {
  it("WhatsApp sem número não gera link", () => {
    expect(whatsappUrl("oi", "")).toBeNull();
  });
  it("WhatsApp com número gera wa.me", () => {
    expect(whatsappUrl("oi", "+55 (48) 99999-9999")).toBe("https://wa.me/5548999999999?text=oi");
  });
  it("mensagem contextual por tratamento", () => {
    expect(buildWhatsAppMessage({ topic: "implantes dentários" })).toBe(
      "Olá! Conheci a clínica pelo site e gostaria de informações sobre implantes dentários.",
    );
  });
  it("sem endereço, Como chegar não gera link", () => {
    expect(directionsUrl("", "")).toBeNull();
  });
  it("lê UTMs, gclid e fbclid da URL", () => {
    expect(getUtmParams("?utm_source=google&gclid=abc&fbclid=x&foo=1")).toEqual({ utm_source: "google", gclid: "abc", fbclid: "x" });
  });
});
