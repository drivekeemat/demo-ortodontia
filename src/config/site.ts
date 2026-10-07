/**
 * CONFIGURAÇÃO CENTRAL DA CLÍNICA
 * Substitua aqui todos os dados para reutilizar o projeto em outra clínica.
 * Valores entre [COLCHETES] são placeholders e DEVEM ser trocados antes da publicação.
 */
import hero from "@/assets/hero.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";

/** Mostra selos "placeholder" nos dados fictícios. Coloque false no site final. */
export const SHOW_PLACEHOLDER_HINTS = true;

export const site = {
  name: "Clínica Alva Odontologia",
  shortName: "Alva",
  tagline: "Odontologia moderna, atendimento humanizado e cuidado individualizado.",
  city: "Florianópolis",
  state: "SC",
  address: "[ENDEREÇO COMPLETO]",
  mapsQuery: "Florianópolis, SC",
  phone: "[TELEFONE]",
  phoneHref: "tel:+550000000000",
  whatsapp: "[WHATSAPP]", // somente dígitos com DDI, ex: 5548999999999
  whatsappMessage:
    "Olá! Vim pelo site da Clínica Alva e gostaria de saber mais sobre o atendimento.",
  instagram: "https://instagram.com/[INSTAGRAM]",
  instagramHandle: "@[INSTAGRAM]",
  hours: [
    { days: "Segunda a sexta", time: "[08h às 19h]" },
    { days: "Sábado", time: "[08h às 12h]" },
  ],
  parking: "[Informações de estacionamento]",
  technicalLead: "[RESPONSÁVEL TÉCNICO]",
  cro: "[CRO]",
};

export const images = {
  hero: { src: hero, alt: "Consultório da clínica com cadeira odontológica verde e luz natural", w: 1600, h: 1200 },
  gallery: [
    { src: clinic1, alt: "Recepção acolhedora com sofá e balcão de madeira", w: 1200, h: 1504 },
    { src: clinic2, alt: "Dentista conversando com paciente durante consulta", w: 1504, h: 1008 },
    { src: clinic3, alt: "Instrumentais organizados sobre bandeja de madeira", w: 1200, h: 1200 },
  ],
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Equipe", href: "#equipe" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export const trust = [
  { value: "[X]+", label: "anos de experiência" },
  { value: "[X]", label: "avaliações no Google" },
  { value: "[Nota]", label: "nota média no Google" },
  { value: "[X]", label: "especialidades disponíveis" },
];

export const treatments = [
  { slug: "implantes", name: "Implantes dentários", description: "Reposição de dentes com planejamento cuidadoso e acompanhamento em cada etapa." },
  { slug: "ortodontia", name: "Ortodontia", description: "Alinhamento dos dentes com aparelhos convencionais ou alinhadores, conforme avaliação." },
  { slug: "clareamento", name: "Clareamento dental", description: "Tratamento supervisionado para um sorriso mais claro, com conforto e segurança." },
  { slug: "facetas", name: "Facetas", description: "Ajustes de forma e cor planejados de maneira individual e natural." },
  { slug: "endodontia", name: "Endodontia", description: "Tratamento de canal conduzido com calma e explicações claras." },
  { slug: "preventiva", name: "Odontologia preventiva", description: "Consultas regulares e limpeza para cuidar da saúde bucal ao longo do tempo." },
];

export const differentials = [
  { title: "Atendimento individualizado", text: "Tempo para ouvir, explicar e decidir junto com você." },
  { title: "Tecnologia", text: "[Equipamentos e recursos disponíveis na clínica]." },
  { title: "Planejamento personalizado", text: "Cada plano é pensado a partir da sua avaliação." },
  { title: "Ambiente confortável", text: "Um espaço tranquilo, do acolhimento à consulta." },
];

export const team = [
  { name: "Dra. [Nome]", role: "Cirurgiã-Dentista", cro: "[CRO]", specialty: "[Especialidade]", bio: "[Breve apresentação da profissional, formação e forma de atendimento.]" },
  { name: "Dr. [Nome]", role: "Cirurgião-Dentista", cro: "[CRO]", specialty: "[Especialidade]", bio: "[Breve apresentação do profissional, formação e forma de atendimento.]" },
];

/** Exemplos de demonstração — substituir por avaliações reais autorizadas. */
export const reviews = [
  { name: "[Nome do paciente]", rating: 5, text: "[Texto da avaliação real do paciente.]", source: "Google" },
  { name: "[Nome do paciente]", rating: 5, text: "[Texto da avaliação real do paciente.]", source: "Google" },
  { name: "[Nome do paciente]", rating: 5, text: "[Texto da avaliação real do paciente.]", source: "Google" },
];

export const faq = [
  { q: "Como funciona a primeira consulta?", a: "Na primeira consulta conversamos sobre suas necessidades, realizamos uma avaliação e explicamos as possibilidades de tratamento com calma." },
  { q: "Como faço para agendar?", a: "O jeito mais rápido é pelo WhatsApp. Nossa equipe responde e encontra o melhor horário para você." },
  { q: "Quais formas de pagamento são aceitas?", a: "[Informe as formas de pagamento aceitas pela clínica.]" },
  { q: "A clínica atende convênios?", a: "[Informe se a clínica atende convênios e quais.]" },
  { q: "Onde a clínica está localizada?", a: "Estamos em Florianópolis – SC. O endereço completo e o mapa estão na seção Localização." },
  { q: "Como posso tirar dúvidas antes da consulta?", a: "Envie sua dúvida pelo WhatsApp ou telefone. Teremos prazer em ajudar." },
];
