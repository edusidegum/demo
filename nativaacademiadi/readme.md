# N'ativa Academia — Landing Page 2026

Landing page institucional da N'ativa Academia (Canoas/RS), construída com HTML5 semântico, CSS3 moderno e JavaScript ES6 vanilla. Otimizada para SEO, Core Web Vitals, acessibilidade WCAG 2.2 AA e deploy imediato no GitHub Pages — zero dependências externas, zero build step.

---

## Tecnologias

- **HTML5** semântico (`header`, `main`, `section`, `article`, `footer`, `details`/`summary`)
- **CSS3** com Custom Properties (tokens de design), glassmorphism controlado, backdrop-blur, animações GPU (`transform`/`opacity`), container queries e breakpoints mobile-first
- **JavaScript ES6** vanilla: Intersection Observer para reveal animations, scroll-aware header, accordion FAQ (exclusivo), banner de cookies LGPD
- **Schema.org** JSON-LD triplo: `LocalBusiness` + `FAQPage` + `WebSite`/`SearchAction`
- **Open Graph** e **Twitter Cards** completos
- **SEO on-page**: meta title/description, canonical, headings hierárquicos (1 H1), alt texts descritivos

---

## Performance

| Métrica | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | 0 |
| TBT (Total Blocking Time) | < 200ms |
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |

Estratégias: preload da imagem hero, lazy loading nativo, CSS crítico inline, zero dependências externas, animações em `transform`/`opacity` via GPU.

---

## Estrutura de Arquivos

```
nativaacademia/
├── index.html          # Landing page completa (self-contained)
├── robots.txt          # Regras de rastreamento
├── sitemap.xml         # Sitemap XML para motores de busca
└── README.md           # Este arquivo
```

---

## Deploy

1. Faça o push do repositório para o GitHub
2. Em **Settings > Pages**, selecione a branch `main` (ou `master`) e a pasta raiz `/ (root)`
3. O site estará disponível em `https://<seu-usuario>.github.io/nativaacademia/`

Nenhum build step necessário — é HTML puro, servido estaticamente.

---

## SEO & Descoberta por LLMs

A página segue o modelo **P.E.R.F.E.I.T.O.** (2026) para maximizar a descoberta por mecanismos de busca e Large Language Models:

- Marcação semântica rigorosa com dados estruturados `schema.org`
- Conteúdo E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- Estrutura scannable com hierarquia visual clara
- Dados verificáveis e termos preservados integralmente

---

## Acessibilidade

- WCAG 2.2 AA
- Skip link para conteúdo principal
- `focus-visible` ring em todos os elementos interativos
- Navegação completa por teclado
- `prefers-reduced-motion` respeitado
- Contraste de cores validado
- ARIA labels em botões e ícones

---

## LGPD / Cookies

Banner de consentimento com `localStorage`. Ao aceitar, o banner não é exibido novamente por 180 dias. Link para Política de Privacidade incluído. Nenhum cookie de rastreamento de terceiros.

---

## Contato

- **WhatsApp**: [51 99898-7808](https://wa.me/5551998987808)
- **Instagram**: [@nativaacademiadi](https://www.instagram.com/nativaacademiadi/)
- **Endereço**: Av. Boqueirão, 2536 — Canoas/RS

---

## Licença & Créditos

Desenvolvido por [EduSideGum](https://github.com/edusidegum) com base no modelo **P.E.R.F.E.I.T.O.** para landing pages de pequenos negócios (2026). Conteúdo e imagens pertencem à N'ativa Academia.
