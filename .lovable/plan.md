# Odonto v1.1 — Refinamento cirúrgico

Preservar identidade (sálvia/off-white/grafite, Fraunces + Manrope), layout editorial, galeria assimétrica, lista numerada, rodapé escuro e animações. Nada de backend, dependências ou serviços externos.

## Mudanças visíveis

1. **Hero mobile** — ordem: identificação, título, subtítulo, CTAs, foto (desktop mantém 2 colunas). Subtítulo novo do brief. CTAs: "Conversar com a equipe" (primário, destaque) e "Conhecer tratamentos". Foto mobile em 4/3, sem empurrar o texto.
2. **Legibilidade** — textos secundários mínimo 16px no mobile, `muted-foreground` um pouco mais escuro para contraste AA, line-height e espaçamentos revisados; selos placeholder 12px.
3. **Tratamentos** — lista numerada preservada; cada item ganha ação contextual curta ("Conversar sobre implantes", "Tirar dúvidas sobre ortodontia", etc.) com mensagem de WhatsApp própria. No mobile: número, título, descrição e ação empilhados sem aperto.
4. **Equipe** — retratos maiores em composição editorial; placeholder elegante (monograma/ícone em fundo sálvia suave, selo "Demonstração"). Sem nomes, CRO ou especialidades inventados: campos vazios simplesmente não aparecem. Pronto para receber `photo`. CTA "Falar com nossa equipe".
5. **CTAs contextuais** — Equipe, Localização ("Como chegar"), final ("Conversar pelo WhatsApp"). Botão flutuante revisado: 56px, distância segura das bordas, safe-area no iPhone, sem cobrir conteúdo.
6. **Dados fictícios** — indicadores de confiança só aparecem se tiverem valor real (hoje: seção oculta). Avaliações: ocultas enquanto não houver avaliações autorizadas (item de menu também some). CRO/responsável técnico só exibidos se preenchidos.
7. **WhatsApp sem número** — botões continuam visíveis, mas abrem um aviso discreto "Número de demonstração — configure o WhatsApp" em vez de link inválido. Mesmo para telefone e Instagram.
8. **Localização** — sem endereço configurado: bloco demonstrativo identificado no lugar do mapa e "Como chegar" desabilitado com aviso; com endereço: mapa responsivo (lazy) e link correto. Lista de contatos mais escaneável no mobile.
9. **Galeria** — composição preservada; no mobile proporções consistentes, `sizes`/lazy loading, `decoding="async"`.
10. **Privacidade/Termos** — faixa clara "Modelo provisório — personalizar antes da publicação comercial (LGPD)".

## Técnico

- `src/config/site.ts` passa a ser o único arquivo da clínica (renomeado para `src/config/clinic.ts` com re-export de `site.ts` para não quebrar imports): contatos, logo, cores de referência, SEO, responsável técnico, tratamentos (com `ctaLabel` e `whatsappTopic`), equipe (`photo?`), diferenciais, avaliações autorizadas, trust. Placeholders viram `null`/strings vazias; helper `isConfigured()`.
- `src/lib/tracking.ts`: `buildWhatsAppMessage(context)` e `whatsappUrl()` retornando `null` sem número; `track(event, { event_location, treatment })` empurra para `dataLayer` só se existir (sem scripts instalados); eventos `click_whatsapp, click_phone, click_instagram, click_directions, click_treatment`. `getUtmParams()` lê utm_* / gclid / fbclid da URL em memória — remove persistência em sessionStorage, nada enviado nem anexado ao WhatsApp.
- SEO: H1 único, hierarquia H2/H3, JSON-LD Dentist só com campos preenchidos, alt texts revisados, og/canonical mantidos.
- Testes vitest: WhatsApp sem número retorna null; mensagem por tratamento correta; trust/reviews vazios não renderizam; UTMs lidas da URL.
- Revisão final com Playwright em 390px e 1280px (scroll horizontal, console, botões).
- Atualizar `AGENTS.md` com as regras de config/tracking.

Ao final: resumo com alterado / preservado / funcionando / preparado / dados pendentes da clínica.
