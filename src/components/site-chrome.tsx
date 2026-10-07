import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { nav, site } from "@/config/site";
import { Logo, WhatsAppButton } from "@/components/ui-kit";
import { track, whatsappUrl, captureAttribution } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    captureAttribution();
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/#inicio" aria-label={site.name}>
          <Logo />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-sm text-foreground/80">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="transition-colors hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton location="header" className="hidden min-h-11 sm:inline-flex" />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            onClick={() => track("click_whatsapp", { location: "header_mobile" })}
            className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground sm:hidden"
          >
            <MessageCircle className="size-5" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="h-[calc(100dvh-4.5rem)] overflow-y-auto px-5 pb-10 lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="divide-y divide-border border-t border-border">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} onClick={() => setOpen(false)} className="block py-5 font-display text-3xl">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton location="mobile_menu" className="mt-8 w-full" />
        </nav>
      )}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      data-track="click_whatsapp"
      onClick={() => track("click_whatsapp", { location: "floating" })}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)] transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-24 pt-16 text-ink-foreground sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">{site.tagline}</p>
          <p className="mt-6 text-xs text-ink-foreground/60">
            Responsável técnico: {site.technicalLead} · CRO {site.cro}
          </p>
        </div>
        <ul className="space-y-3 text-sm text-ink-foreground/80">
          <li className="flex gap-3"><Phone className="size-4 shrink-0 mt-0.5" /><a href={site.phoneHref} onClick={() => track("click_phone", { location: "footer" })} className="hover:text-ink-foreground">{site.phone}</a></li>
          <li className="flex gap-3"><MessageCircle className="size-4 shrink-0 mt-0.5" /><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp", { location: "footer" })} className="hover:text-ink-foreground">WhatsApp {site.whatsapp}</a></li>
          <li className="flex gap-3"><Instagram className="size-4 shrink-0 mt-0.5" /><a href={site.instagram} target="_blank" rel="noopener noreferrer" onClick={() => track("click_instagram", { location: "footer" })} className="hover:text-ink-foreground">{site.instagramHandle}</a></li>
          <li className="flex gap-3"><MapPin className="size-4 shrink-0 mt-0.5" /><span>{site.address}<br />{site.city} – {site.state}</span></li>
        </ul>
        <ul className="space-y-3 text-sm text-ink-foreground/80">
          {site.hours.map((h) => (
            <li key={h.days} className="flex gap-3"><Clock className="size-4 shrink-0 mt-0.5" />{h.days}: {h.time}</li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-ink-foreground/15 px-5 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:justify-between sm:px-8">
        <p>© {year} {site.name}. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link to="/privacidade" className="hover:text-ink-foreground">Política de Privacidade</Link>
          <Link to="/termos" className="hover:text-ink-foreground">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
