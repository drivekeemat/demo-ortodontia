import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { nav, site } from "@/config/clinic";
import { ContactLink, DemoNotice, Logo, WhatsAppButton } from "@/components/ui-kit";
import { instagramUrl, phoneUrl, whatsappUrl } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const WA_DEMO = "Demonstração: o WhatsApp da clínica ainda não foi configurado.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
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
          <ul className="flex gap-8 text-[15px] text-foreground/85">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="transition-colors hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton location="header" className="hidden min-h-11 sm:inline-flex" />
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
    <>
      <ContactLink
        href={whatsappUrl()}
        event="click_whatsapp"
        context={{ event_location: "floating" }}
        demoText={WA_DEMO}
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_28px_-8px_var(--primary)] ring-4 ring-background/70 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="size-6" aria-hidden />
      </ContactLink>
      <DemoNotice />
    </>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const link = "hover:text-ink-foreground";
  return (
    <footer className="bg-ink pb-28 pt-16 text-ink-foreground sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-foreground/75">{site.tagline}</p>
          {(site.technicalLead || site.cro) && (
            <p className="mt-6 text-sm text-ink-foreground/70">
              Responsável técnico: {site.technicalLead}{site.cro && ` · CRO ${site.cro}`}
            </p>
          )}
        </div>
        <ul className="space-y-3 text-[15px] text-ink-foreground/85">
          {site.phone && (
            <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <ContactLink href={phoneUrl()} external={false} event="click_phone" context={{ event_location: "footer" }} demoText="Demonstração: telefone não configurado." className={link}>{site.phone}</ContactLink>
            </li>
          )}
          <li className="flex gap-3"><MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            <ContactLink href={whatsappUrl()} event="click_whatsapp" context={{ event_location: "footer" }} demoText={WA_DEMO} className={link}>WhatsApp</ContactLink>
          </li>
          {site.instagram && (
            <li className="flex gap-3"><Instagram className="mt-0.5 size-4 shrink-0" aria-hidden />
              <ContactLink href={instagramUrl()} event="click_instagram" context={{ event_location: "footer" }} demoText="Demonstração: Instagram não configurado." className={link}>@{site.instagram.replace(/^@/, "")}</ContactLink>
            </li>
          )}
          <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /><span>{site.address && <>{site.address}<br /></>}{site.city} – {site.state}</span></li>
        </ul>
        {site.hours.length > 0 && (
          <ul className="space-y-3 text-[15px] text-ink-foreground/85">
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0" aria-hidden />{h.days}: {h.time}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-ink-foreground/15 px-5 pt-6 text-sm text-ink-foreground/70 sm:flex-row sm:justify-between sm:px-8">
        <p>© {year} {site.name}. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link to="/privacidade" className={link}>Política de Privacidade</Link>
          <Link to="/termos" className={link}>Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
