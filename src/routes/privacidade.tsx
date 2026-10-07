import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade | ${site.name}` },
      { name: "description", content: `Como a ${site.name} trata seus dados pessoais, conforme a LGPD.` },
      { property: "og:title", content: `Política de Privacidade | ${site.name}` },
      { property: "og:description", content: `Como a ${site.name} trata seus dados pessoais.` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: () => (
    <LegalPage title="Política de Privacidade">
      <p>[Texto da Política de Privacidade a ser fornecido pela clínica, em conformidade com a LGPD (Lei nº 13.709/2018).]</p>
      <p>Este site não solicita dados clínicos ou informações sensíveis de saúde por formulários.</p>
      <p>Contato do encarregado de dados: [E-MAIL DO ENCARREGADO].</p>
    </LegalPage>
  ),
});
