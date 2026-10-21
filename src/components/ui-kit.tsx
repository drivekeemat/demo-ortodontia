import { useEffect, useRef, useState, type ReactNode, type AnchorHTMLAttributes } from "react";
import { SHOW_PLACEHOLDER_HINTS, site } from "@/config/clinic";
import { buildWhatsAppMessage, showDemoNotice, track, whatsappUrl, type TrackContext, type TrackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--primary)] hover:bg-primary/90",
  outline: "border border-foreground/25 text-foreground hover:border-foreground/50 hover:bg-foreground/[0.03]",
  ghost: "text-foreground underline-offset-4 hover:underline px-0",
  light: "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
};
export const buttonClass = (variant: Variant = "primary", className?: string) =>
  cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-300",
    variants[variant],
    className,
  );

export function ButtonLink({ variant = "primary", className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a {...props} className={buttonClass(variant, className)}>
      {children}
    </a>
  );
}

/**
 * Link de contato seguro: com URL configurada abre normalmente; sem URL mostra aviso de demonstração.
 */
export function ContactLink({
  href,
  event,
  context,
  demoText,
  external = true,
  className,
  children,
  ...rest
}: {
  href: string | null;
  event: TrackEvent;
  context?: TrackContext;
  demoText: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      {...rest}
      href={href ?? "#"}
      {...(href && external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-track={event}
      data-location={context?.event_location}
      data-demo={href ? undefined : "true"}
      onClick={(e) => {
        if (!href) {
          e.preventDefault();
          showDemoNotice(demoText);
          return;
        }
        track(event, context);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

/** CTA central de WhatsApp. */
export function WhatsAppButton({
  location,
  children = "Conversar com a equipe",
  topic,
  treatment,
  variant = "primary",
  className,
}: {
  location: string;
  children?: ReactNode;
  topic?: string;
  treatment?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <ContactLink
      href={whatsappUrl(buildWhatsAppMessage({ topic }))}
      event="click_whatsapp"
      context={{ event_location: location, ...(treatment ? { treatment } : {}) }}
      demoText="Demonstração: o WhatsApp da clínica ainda não foi configurado."
      className={buttonClass(variant, className)}
    >
      {children}
    </ContactLink>
  );
}

/** Aviso discreto (não bloqueante) para links em modo demonstração. */
export function DemoNotice() {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const on = (e: Event) => {
      setText((e as CustomEvent<string>).detail);
      clearTimeout(t);
      t = setTimeout(() => setText(null), 3500);
    };
    window.addEventListener("demo-notice", on);
    return () => {
      window.removeEventListener("demo-notice", on);
      clearTimeout(t);
    };
  }, []);
  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex justify-center px-5">
      {text && (
        <p className="rounded-full bg-ink px-5 py-3 text-sm text-ink-foreground shadow-lg animate-in fade-in slide-in-from-bottom-2">
          {text}
        </p>
      )}
    </div>
  );
}

export function PlaceholderHint({ children = "Demonstração — substituir pelos dados reais" }: { children?: ReactNode }) {
  if (!SHOW_PLACEHOLDER_HINTS) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-placeholder/60 bg-placeholder/10 px-3 py-1 text-xs font-medium text-foreground/75">
      <span className="size-1.5 rounded-full bg-placeholder" aria-hidden />
      {children}
    </span>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[2.25rem] leading-[1.08] sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className={cn("flex items-baseline gap-2", light ? "text-ink-foreground" : "text-foreground")}>
      <span className="font-display text-2xl tracking-tight">{site.logo.word}</span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] opacity-75">{site.logo.suffix}</span>
    </span>
  );
}
