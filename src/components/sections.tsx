import { ArrowUpRight, Plus, Star, Clock, Phone, MapPin, Car, MessageCircle, UserRound } from "lucide-react";
import { differentials, faq, images, reviews, site, team, TEAM_DEMO_SLOTS, treatments, visibleTrust } from "@/config/clinic";
import { ButtonLink, ContactLink, PlaceholderHint, Reveal, SectionHeading, WhatsAppButton, buttonClass } from "@/components/ui-kit";
import { buildWhatsAppMessage, directionsUrl, phoneUrl, whatsappUrl } from "@/lib/tracking";

const container = "mx-auto max-w-7xl px-5 sm:px-8";

export function Hero() {
  return (
    <section id="inicio" className="pt-24 sm:pt-28">
      <div className={`${container} grid items-center gap-10 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pb-24`}>
        <div className="pt-4 lg:pt-0">
          <p className="eyebrow">Clínica odontológica · {site.city} – {site.state}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl">
            Odontologia que cuida de você <em className="text-primary">por inteiro.</em>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
            Atendimento odontológico personalizado, tecnologia e cuidado humanizado em {site.city}.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton location="hero" className="min-h-14 px-8 text-base">Conversar com a equipe</WhatsAppButton>
            <ButtonLink href="#tratamentos" variant="outline" className="min-h-14">Conhecer tratamentos</ButtonLink>
          </div>
        </div>
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          width={images.hero.w}
          height={images.hero.h}
          fetchPriority="high"
          decoding="async"
          className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/4.4]"
        />
      </div>
    </section>
  );
}

/** Só renderiza indicadores com valor real. */
export function Trust() {
  const items = visibleTrust();
  if (!items.length) return null;
  return (
    <section aria-label="Indicadores da clínica" className="border-y border-border">
      <div className={`${container} py-10`}>
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {items.map((t) => (
            <div key={t.label} className="flex flex-col-reverse border-l border-border pl-5">
              <dt className="mt-1 text-sm text-muted-foreground">{t.label}</dt>
              <dd className="font-display text-3xl sm:text-4xl">{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Treatments() {
  return (
    <section id="tratamentos" className="border-t border-border py-24 sm:py-32">
      <div className={container}>
        <Reveal><SectionHeading eyebrow="Tratamentos" title="Tratamentos para cada fase do seu sorriso" intro="Cada tratamento começa por uma avaliação cuidadosa e uma conversa sobre o que é melhor para você." /></Reveal>
        <ul className="mt-14 border-t border-border">
          {treatments.map((t, i) => (
            <li key={t.slug} id={t.slug} className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-b border-border py-8 transition-colors hover:bg-sage-soft/40 sm:grid-cols-[4rem_1fr_1.3fr_auto] sm:items-center sm:px-4">
              <span className="font-display text-lg text-sage" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl sm:text-3xl">{t.name}</h3>
              <p className="col-start-2 text-base leading-relaxed text-muted-foreground sm:col-start-auto">{t.description}</p>
              <ContactLink
                href={whatsappUrl(buildWhatsAppMessage({ topic: t.topic }))}
                event="click_treatment"
                context={{ event_location: "treatments", treatment: t.slug }}
                demoText="Demonstração: o WhatsApp da clínica ainda não foi configurado."
                className="col-start-2 inline-flex min-h-11 items-center gap-1.5 justify-self-start text-[15px] font-semibold text-primary underline-offset-4 hover:underline sm:col-start-auto sm:justify-self-end"
              >
                {t.cta}
                <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </ContactLink>
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
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clinic() {
  const [a, b, c] = images.gallery as [(typeof images.gallery)[number], (typeof images.gallery)[number], (typeof images.gallery)[number]];
  const img = "w-full rounded-2xl object-cover";
  return (
    <section id="clinica" className="py-24 sm:py-32">
      <div className={container}>
        <Reveal><SectionHeading eyebrow="A clínica" title="Um espaço pensado para receber você." /></Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12">
          <img src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" decoding="async" sizes="(min-width: 768px) 40vw, 100vw" className={`${img} col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto md:h-full`} />
          <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" decoding="async" sizes="(min-width: 768px) 58vw, 100vw" className={`${img} col-span-2 aspect-[3/2] md:col-span-7`} />
          <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" decoding="async" sizes="(min-width: 768px) 33vw, 50vw" className={`${img} aspect-square md:col-span-4`} />
          <div className="flex flex-col justify-end rounded-2xl bg-sage-soft p-5 sm:p-8 md:col-span-3">
            <p className="font-display text-lg leading-snug sm:text-2xl">Luz natural, calma e conforto em cada ambiente.</p>
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
          <h2 className="mt-4 text-[2.25rem] leading-[1.1] sm:text-5xl">Odontologia moderna com um olhar humano.</h2>
        </Reveal>
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
          <p>A {site.shortName} nasceu da vontade de oferecer um atendimento odontológico mais próximo, em que cada pessoa é ouvida com atenção.</p>
          <p>Cada plano de tratamento é construído de forma individual, explicado com clareza e conduzido no seu tempo.</p>
          <p>Em um ambiente acolhedor e confortável, unimos recursos atuais da odontologia ao cuidado de sempre.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Portrait({ photo, name }: { photo?: string | undefined; name?: string | undefined }) {
  if (photo) return <img src={photo} alt={name ? `Retrato de ${name}` : ""} loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-2xl object-cover" />;
  return (
    <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-2xl bg-sage-soft" aria-hidden>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sage/25 to-transparent" />
      <UserRound className="size-20 text-sage" strokeWidth={1} />
    </div>
  );
}

export function Team() {
  const demo = team.length === 0;
  const slots = demo ? Array.from({ length: TEAM_DEMO_SLOTS }) : team;
  return (
    <section id="equipe" className="bg-secondary py-24 sm:py-32">
      <div className={container}>
        <Reveal>
          <SectionHeading eyebrow="Equipe" title="Conheça quem vai cuidar do seu sorriso." intro="Profissionais que unem técnica, escuta e cuidado em cada atendimento." />
        </Reveal>
        <div className="mt-14 grid gap-14 sm:grid-cols-2 lg:gap-10">
          {slots.map((p, i) => {
            const pro = demo ? null : team[i]!;
            return (
              <Reveal key={i}>
                <article className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end">
                  <div className="mx-auto w-full max-w-sm lg:max-w-none"><Portrait photo={pro?.photo} name={pro?.name} /></div>
                  <div className="min-w-0">
                    {pro ? (
                      <>
                        <h3 className="text-3xl">{pro.name}</h3>
                        <p className="mt-1 text-base font-semibold text-primary">{pro.role}</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {pro.cro && <>CRO {pro.cro}</>}
                          {pro.specialty && <> · {pro.specialty}</>}
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pro.bio}</p>
                      </>
                    ) : (
                      <>
                        <PlaceholderHint>Perfil de demonstração</PlaceholderHint>
                        <h3 className="mt-4 text-3xl">Profissional da clínica</h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">Espaço reservado para retrato, nome, CRO e uma breve apresentação do profissional.</p>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-14">
          <WhatsAppButton location="team" variant="outline">Falar com nossa equipe</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

/** Oculta enquanto não houver avaliações autorizadas. */
export function Reviews() {
  if (!reviews.length) return null;
  return (
    <section id="avaliacoes" className="py-24 sm:py-32">
      <div className={container}>
        <Reveal><SectionHeading eyebrow="Avaliações" title={`Experiências de quem confia na ${site.shortName}.`} /></Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i}>
              <figure className="border-t border-foreground/80 pt-6">
                <div className="flex gap-0.5 text-primary" role="img" aria-label={`${r.rating} de 5 estrelas`}>
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
              <p className="pb-6 pr-10 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const directions = directionsUrl();
  const tel = phoneUrl();
  const hasAddress = Boolean(site.address.trim());
  const row = "flex gap-4 text-base";
  return (
    <section id="localizacao" className="bg-secondary py-24 sm:py-32">
      <div className={`${container} grid gap-12 lg:grid-cols-2`}>
        <div>
          <Reveal><SectionHeading eyebrow="Localização" title="Estamos perto de você." /></Reveal>
          <ul className="mt-10 space-y-6">
            <li className={row}>
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                {hasAddress ? site.address : <PlaceholderHint>Endereço a configurar</PlaceholderHint>}
                <span className="block text-muted-foreground">{site.city} – {site.state}</span>
              </span>
            </li>
            {site.hours.length > 0 && (
              <li className={row}><Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>{site.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span></li>
            )}
            {site.phone && (
              <li className={row}><Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <ContactLink href={tel} external={false} event="click_phone" context={{ event_location: "location" }} demoText="Demonstração: telefone não configurado." className="hover:text-primary">{site.phone}</ContactLink>
              </li>
            )}
            <li className={row}><MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>Atendimento pelo WhatsApp</span></li>
            {site.parking && <li className={row}><Car className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>{site.parking}</span></li>}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ContactLink href={directions} event="click_directions" context={{ event_location: "location" }} demoText="Demonstração: endereço da clínica ainda não configurado." className={buttonClass("outline")}>Como chegar</ContactLink>
            <WhatsAppButton location="location">Conversar pelo WhatsApp</WhatsAppButton>
          </div>
        </div>
        {hasAddress ? (
          <iframe
            title={`Mapa: ${site.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address}, ${site.city} - ${site.state}`)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] min-h-[320px] w-full rounded-2xl border-0 grayscale-[40%] lg:aspect-auto"
          />
        ) : (
          <div className="grid min-h-[320px] place-items-center rounded-2xl border border-dashed border-foreground/20 bg-background p-8 text-center">
            <div>
              <MapPin className="mx-auto size-8 text-sage" aria-hidden />
              <p className="mt-4 font-display text-2xl">Mapa da clínica</p>
              <p className="mt-2 text-base text-muted-foreground">O mapa aparece aqui quando o endereço real for configurado.</p>
              <div className="mt-4"><PlaceholderHint>Demonstração</PlaceholderHint></div>
            </div>
          </div>
        )}
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
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-foreground/80">Entre em contato com nossa equipe para tirar dúvidas e agendar seu atendimento.</p>
          <WhatsAppButton location="final_cta" variant="light" className="mt-10 min-h-14 px-8 text-base">Conversar pelo WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
