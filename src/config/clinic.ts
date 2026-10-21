/**
 * CONFIGURAÇÃO CENTRAL DA CLÍNICA — Odonto v1.1
 * Único arquivo a editar ao entregar o site para uma nova clínica.
 * Campos vazios ("") ou listas vazias NÃO são exibidos no site: nada fictício aparece como real.
 */
import hero from "@/assets/hero.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";

/** Mostra selos "Demonstração" onde faltam dados reais. Coloque false no site final. */
export const SHOW_PLACEHOLDER_HINTS = true;

export const site = {
  name: "Clínica Alva Odontologia",
  shortName: "Alva",
  /** Logo em texto: nome + complemento. Troque por imagem no componente Logo se necessário. */
  logo: { word: "Alva", suffix: "Odontologia" },
  tagline: "Odontologia moderna, atendimento humanizado e cuidado individualizado.",
  city: "Florianópolis",
  state: "SC",
  /** Endereço completo real. Vazio = mapa e "Como chegar" em modo demonstração. */
  address: "",
  /** Link exato do Google Maps (opcional). Se vazio, é gerado a partir do endereço. */
  mapsUrl: "",
  /** Somente dígitos, com DDI e DDD. Ex: 5548999999999. Vazio = modo demonstração. */
  whatsapp: "",
  /** Telefone para exibição, ex: (48) 3333-3333. */
  phone: "",
  /** Somente o usuário, sem @. */
  instagram: "",
  hours: [] as { days: string; time: string }[],
  parking: "",
  technicalLead: "",
  cro: "",
  /** Cores de referência (os tokens reais ficam em src/styles.css). */
  colors: { primary: "#4f6b5a", background: "#faf8f3", ink: "#2c312e" },
  seo: {
    title: "Clínica Alva Odontologia | Dentista em Florianópolis",
    description:
      "Atendimento odontológico personalizado, tecnologia e cuidado humanizado em Florianópolis. Converse com a equipe da Clínica Alva.",
  },
};

export const images = {
  hero: { src: hero, alt: "Consultório odontológico com cadeira verde e luz natural", w: 1600, h: 1200 },
  gallery: [
    { src: clinic1, alt: "Recepção com sofá e balcão de madeira", w: 1200, h: 1504 },
    { src: clinic2, alt: "Dentista conversando com paciente durante a consulta", w: 1504, h: 1008 },
    { src: clinic3, alt: "Instrumentais organizados sobre bandeja de madeira", w: 1200, h: 1200 },
  ],
};

/** Indicadores só aparecem se `value` estiver preenchido. */
export const trust: { value: string; label: string }[] = [
  { value: "", label: "anos de experiência" },
  { value: "", label: "avaliações no Google" },
  { value: "", label: "nota média no Google" },
  { value: "", label: "especialidades disponíveis" },
];

export const treatments = [
  { slug: "implantes", name: "Implantes dentários", topic: "implantes dentários", cta: "Conversar sobre implantes", description: "Reposição de dentes com planejamento cuidadoso e acompanhamento em cada etapa." },
  { slug: "ortodontia", name: "Ortodontia", topic: "ortodontia", cta: "Tirar dúvidas sobre ortodontia", description: "Alinhamento dos dentes com aparelhos convencionais ou alinhadores, conforme avaliação." },
  { slug: "clareamento", name: "Clareamento dental", topic: "clareamento dental", cta: "Informações sobre clareamento", description: "Tratamento supervisionado para um sorriso mais claro, com conforto e segurança." },
  { slug: "facetas", name: "Facetas", topic: "facetas", cta: "Conversar sobre facetas", description: "Ajustes de forma e cor planejados de maneira individual e natural." },
  { slug: "endodontia", name: "Endodontia", topic: "endodontia (tratamento de canal)", cta: "Informações sobre endodontia", description: "Tratamento de canal conduzido com calma e explicações claras." },
  { slug: "preventiva", name: "Odontologia preventiva", topic: "uma consulta preventiva", cta: "Agendar uma consulta", description: "Consultas regulares e limpeza para cuidar da saúde bucal ao longo do tempo." },
];

export const differentials = [
  { title: "Atendimento individualizado", text: "Tempo para ouvir, explicar e decidir junto com você." },
  { title: "Tecnologia", text: "Recursos atuais da odontologia a serviço do diagnóstico e do conforto." },
  { title: "Planejamento personalizado", text: "Cada plano é pensado a partir da sua avaliação." },
  { title: "Ambiente confortável", text: "Um espaço tranquilo, do acolhimento à consulta." },
];

/**
 * Profissionais. Vazio = vagas de demonstração. Preencha somente com dados comprovados.
 * `photo`: importe a imagem real (ex: import dra from "@/assets/dra.jpg").
 */
export type Professional = { name: string; role: string; cro: string; specialty?: string; bio: string; photo?: string };
export const team: Professional[] = [];
export const TEAM_DEMO_SLOTS = 2;

/** Somente avaliações reais com autorização. Lista vazia = seção oculta. */
export const reviews: { name: string; rating: number; text: string; source: string }[] = [];

export const faq = [
  { q: "Como funciona a primeira consulta?", a: "Na primeira consulta conversamos sobre suas necessidades, realizamos uma avaliação e explicamos as possibilidades de tratamento com calma." },
  { q: "Como faço para agendar?", a: "O jeito mais rápido é pelo WhatsApp. Nossa equipe responde e encontra o melhor horário para você." },
  { q: "Quais formas de pagamento são aceitas?", a: "As formas de pagamento são apresentadas pela equipe no contato inicial." },
  { q: "A clínica atende convênios?", a: "Fale com a equipe para saber sobre convênios e condições de atendimento." },
  { q: "Onde a clínica está localizada?", a: "Estamos em Florianópolis – SC. Veja os detalhes na seção Localização." },
  { q: "Como posso tirar dúvidas antes da consulta?", a: "Envie sua dúvida pelo WhatsApp. Teremos prazer em ajudar." },
];

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Equipe", href: "#equipe" },
  ...(reviews.length ? [{ label: "Avaliações", href: "#avaliacoes" }] : []),
  { label: "Localização", href: "#localizacao" },
];

export const visibleTrust = () => trust.filter((t) => t.value.trim());
