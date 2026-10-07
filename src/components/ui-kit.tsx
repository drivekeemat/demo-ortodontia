import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { SHOW_PLACEHOLDER_HINTS } from "@/config/site";
import { track, whatsappUrl } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/[0.03]",
  ghost: "text-foreground underline-offset-4 hover:underline px-0",
  light: "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

/** CTA centralizado de WhatsApp — todos os botões de agendamento usam este componente. */
export function WhatsAppButton({
  location,
  children = "Agendar avaliação",
  variant = "primary",
  className,
}: {
  location: string;
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <ButtonLink
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-track="click_whatsapp"
      data-location={location}
      onClick={() => track("click_whatsapp", { location })}
      variant={variant}
      className={className}
    >
      {children}
    </ButtonLink>
  );
}

export function PlaceholderHint({ children = "Substituir pelos dados reais" }: { children?: ReactNode }) {
  if (!SHOW_PLACEHOLDER_HINTS) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-placeholder/60 bg-placeholder/10 px-2.5 py-1 text-[11px] font-medium text-foreground/70">
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
        if (e.isIntersecting) {
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
      <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className={cn("flex items-baseline gap-2", light ? "text-ink-foreground" : "text-foreground")}>
      <span className="font-display text-2xl tracking-tight">Alva</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-70">Odontologia</span>
    </span>
  );
}
