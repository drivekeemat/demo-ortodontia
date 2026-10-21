import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Header, Footer, FloatingWhatsApp } from "@/components/site-chrome";
import { Hero, Trust, Treatments, Differentials, Clinic, About, Team, Reviews, Faq, Location, FinalCta } from "@/components/sections";

const title = site.seo.title;
const description = site.seo.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: site.name,
          address: {
            "@type": "PostalAddress",
            ...(site.address ? { streetAddress: site.address } : {}),
            addressLocality: site.city,
            addressRegion: site.state,
            addressCountry: "BR",
          },
          ...(site.phone ? { telephone: site.phone } : {}),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-background focus:px-4 focus:py-2">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Trust />
        <Treatments />
        <Differentials />
        <Clinic />
        <Team />
        <Reviews />
        <About />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
