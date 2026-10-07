import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/config/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: `Termos de Uso | ${site.name}` },
      { name: "description", content: `Termos de uso do site da ${site.name}.` },
      { property: "og:title", content: `Termos de Uso | ${site.name}` },
      { property: "og:description", content: `Termos de uso do site da ${site.name}.` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: () => (
    <LegalPage title="Termos de Uso">
      <p>[Texto dos Termos de Uso a ser fornecido pela clínica.]</p>
      <p>As informações deste site têm caráter informativo e não substituem uma avaliação profissional.</p>
    </LegalPage>
  ),
});
