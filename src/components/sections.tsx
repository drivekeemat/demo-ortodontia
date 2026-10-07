import { ArrowUpRight, Plus, Star, Clock, Phone, MapPin, Car, MessageCircle } from "lucide-react";
import { differentials, faq, images, reviews, site, team, treatments, trust } from "@/config/site";
import { ButtonLink, PlaceholderHint, Reveal, SectionHeading, WhatsAppButton } from "@/components/ui-kit";
import { directionsUrl, track, whatsappUrl } from "@/lib/tracking";

const container = "mx-auto max-w-7xl px-5 sm:px-8";

export function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28">
      <div className={`${container} grid items-center gap-10 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pb-24`}>
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Clínica odontológica · {site.city} – {site.state}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl">
            Odontologia que cuida de você <em className="text-primary">por inteiro.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tratamentos personalizados, tecnologia e atendimento humanizado em {site.city}.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton location="hero" />
            <ButtonLink href="#tratamentos" variant="outline">Conhecer tratamentos</ButtonLink>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.w}
            height={images.hero.h}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/4.4]"
          />
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section aria-label="Indicadores de confiança" className="border-y border-border">
      <div className={`${container} py-10`}>
        <div className="mb-6 flex justify-end"><PlaceholderHint /></div>
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.label} className="border-l border-border pl-5">
              <dt className="sr-only">{t.label}</dt>
              <dd className="font-display text-3xl sm:text-4xl">{t.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{t.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Treatments() {
  return (
    <section id="tratamentos" className="py-24 sm:py-32">
      <div className={container}>
        <Reveal><SectionHeading eyebrow="Tratamentos" title="Tratamentos para cada fase do seu sorriso" intro="Cada tratamento começa por uma avaliação cuidadosa e uma conversa sobre o que é melhor para você." /></Reveal>
        <ul className="mt-14 border-t border-border">
          {treatments.map((t, i) => (
            <li key={t.slug} id={t.slug}>
              <a
                href={whatsappUrl(`Olá! Vim pelo site da Clínica Alva e gostaria de saber mais sobre ${t.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="view_treatment"
                onClick={() => track("view_treatment", { treatment: t.slug })}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 border-b border-border py-7 transition-colors hover:bg-sage-soft/40 sm:grid-cols-[4rem_1fr_1.3fr_auto] sm:items-center sm:px-4"
              >
                <span className="font-display text-lg text-sage">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl sm:text-3xl">{t.name}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-muted-foreground sm:col-start-auto sm:text-base">{t.description}</p>
                <span className="col-start-3 row-start-1 inline-flex items-center gap-1 text-sm font-semibold text-primary sm:col-start-auto sm:row-start-auto">
                  <span className="hidden sm:inline">Saiba mais</span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-[1fr_1.4fr]`}>
        <Reveal><SectionHeading eyebrow="Diferenciais" title="Cuidado em cada detalhe." /></Reveal>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {differentials.map((d) => (
            <Reveal key={d.title}>
              <div className="h-px w-10 bg-primary" aria-hidden />
              <h3 className="mt-5 text-2xl">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clinic() {
  const [a, b, c] = images.gallery;
  return (
    <section id="clinica" className="py-24 sm:py-32">
      <div className={container}>
        <Reveal><SectionHeading eyebrow="A clínica" title="Um espaço pensado para receber você." /></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-12">
          <img src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover md:col-span-5 md:row-span-2 md:aspect-auto md:h-full" />
          <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover md:col-span-7" />
          <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" className="aspect-square w-full rounded-2xl object-cover md:col-span-4" />
          <div className="flex flex-col justify-end rounded-2xl bg-sage-soft p-8 md:col-span-3">
            <p className="font-display text-2xl leading-snug">Luz natural, calma e conforto em cada ambiente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className={`${container} grid gap-10 lg:grid-cols-2`}>
        <Reveal>
          <p className="eyebrow">Sobre a {site.shortName}</p>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">Odontologia moderna com um olhar humano.</h2>
        </Reveal>
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>A {site.shortName} nasceu da vontade de oferecer um atendimento odontológico mais próximo, em que cada pessoa é ouvida com atenção.</p>
          <p>Cada plano de tratamento é construído de forma individual, explicado com clareza e conduzido no seu tempo.</p>
          <p>Em um ambiente acolhedor e confortável, unimos recursos atuais da odontologia ao cuidado de sempre.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="equipe" className="bg-secondary py-24 sm:py-32">
      <div className={container}>
        <Reveal>
          <SectionHeading eyebrow="Equipe" title="Conheça quem vai cuidar do seu sorriso." />
          <div className="mt-6"><PlaceholderHint>Substituir por profissionais reais</PlaceholderHint></div>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {team.map((p, i) => (
            <Reveal key={i}>
              <article className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <div className="grid aspect-[4/5] place-items-center rounded-2xl border border-dashed border-foreground/20 bg-background text-center text-xs text-muted-foreground">
                  [Foto profissional]
                </div>
                <div>
                  <h3 className="text-3xl">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{p.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">CRO: {p.cro} · Especialidade: {p.specialty}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32">
      <div className={container}>
        <Reveal>
          <SectionHeading eyebrow="Avaliações" title={`Experiências de quem confia na ${site.shortName}.`} />
          <div className="mt-6"><PlaceholderHint>Exemplos de demonstração — usar avaliações reais</PlaceholderHint></div>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i}>
              <figure className="border-t border-foreground/80 pt-6" data-placeholder="review">
                <div className="flex gap-0.5 text-primary" aria-label={`${r.rating} de 5 estrelas`}>
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="size-4 fill-current" aria-hidden />)}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">{r.name} · via {r.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.5fr]`}>
        <Reveal><SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" /></Reveal>
        <div className="border-t border-border">
          {faq.map((f) => (
            <details key={f.q} className="group border-b border-border">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="localizacao" className="bg-secondary py-24 sm:py-32">
      <div className={`${container} grid gap-12 lg:grid-cols-2`}>
        <div>
          <Reveal><SectionHeading eyebrow="Localização" title="Estamos perto de você." /></Reveal>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><span>{site.address}<br /><span className="text-muted-foreground">{site.city} – {site.state}</span></span></li>
            <li className="flex gap-4"><Clock className="mt-1 size-5 shrink-0 text-primary" /><span>{site.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span></li>
            <li className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-primary" /><a href={site.phoneHref} onClick={() => track("click_phone", { location: "location" })} className="hover:text-primary">{site.phone}</a></li>
            <li className="flex gap-4"><MessageCircle className="mt-1 size-5 shrink-0 text-primary" /><span>WhatsApp {site.whatsapp}</span></li>
            <li className="flex gap-4"><Car className="mt-1 size-5 shrink-0 text-primary" /><span>{site.parking}</span></li>
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={directionsUrl()} target="_blank" rel="noopener noreferrer" variant="outline" data-track="click_directions" onClick={() => track("click_directions")}>Como chegar</ButtonLink>
            <WhatsAppButton location="location">Agendar pelo WhatsApp</WhatsAppButton>
          </div>
        </div>
        <iframe
          title={`Mapa: ${site.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[360px] w-full rounded-2xl border-0 grayscale-[40%]"
        />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className={`${container} text-center`}>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Seu cuidado pode começar com uma conversa.</h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-foreground/70">Entre em contato com nossa equipe para tirar dúvidas e agendar seu atendimento.</p>
          <WhatsAppButton location="final_cta" variant="light" className="mt-10">Falar pelo WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
