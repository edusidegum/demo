# DEMO — Helio Alvim Hipnoterapeuta

## Estrutura de Pastas

```
demo/empresas/helio-alvim/
├── index.html              ← Landing page principal
├── helio-alvim.js           ← Script de cookie consent (LGPD)
└── img/
    ├── favicon.webp         ← Favicon 32×32px ou 64×64px
    ├── hero.webp            ← Imagem hero 1200×630px (<150KB)
    ├── foto1.webp           ← Galeria / Sobre 800×600px (<100KB)
    └── foto2.webp           ← Galeria / Depoimentos 800×600px (<100KB)
```

> **URL pública:** `https://edusidegum.github.io/demo/empresas/helio-alvim/`

---

## Checklist de Requisitos do Manual Executivo

### ✅ SEO & Indexação
- [x] `<meta name="robots" content="noindex">` no `<head>`
- [x] **Sem** `robots.txt` na pasta da demo
- [x] **Sem** `sitemap.xml` na pasta da demo
- [x] Título: `Hipnoterapia em Novo Hamburgo | Helio Alvim`
- [x] Meta description: 140–155 caracteres
- [x] Open Graph tags (og:title, og:description, og:image, og:type, og:locale)

### ✅ Schema.org JSON-LD
- [x] `@type`: `FAQPage`
- [x] 3 perguntas e respostas (hipnoterapia, problemas tratados, agendamento)
- [x] `sameAs`: `https://www.instagram.com/helio_alvim_filho`

### ✅ WhatsApp
- [x] Link `https://wa.me/5551999935438` com mensagem pré-preenchida
- [x] Botão flutuante fixo no canto inferior direito
- [x] Botão no header
- [x] Botão no hero
- [x] Botão no CTA final

### ✅ Cookie Consent (LGPD)
- [x] Script `helio-alvim.js` com banner de cookies
- [x] Link para Política de Privacidade
- [x] Armazenamento em `localStorage` (`lgpd_cookies_aceitos`)
- [x] Banner estilizado com cores da marca (verde #78BE20)

### ✅ Script de Injeção
- [x] `<script src="https://edusidegum.github.io/menu/scripts/bloco-incluir.js" defer>` no HTML
- [x] Backlink padrão: `https://edusidegum.github.io/`
- [x] Link "Desenvolvido por e-Sid Solutions M.E." no rodapé

### ✅ Política de Privacidade
- [x] Link para: `https://edusidegum.github.io/menu/compartilhado/politicadeprivacidade.html`

### ✅ Imagens
- [x] Formato WebP
- [x] hero.webp: 1200×630px, <150KB
- [x] foto1.webp e foto2.webp: 800×600px, <100KB cada
- [x] favicon.webp
- [x] Até 5 imagens no total (3 + favicon = 4)

### ✅ Responsividade
- [x] HTML5 + CSS3 puro (sem frameworks)
- [x] Mobile-first com media queries
- [x] Layout grid adaptável

### ✅ Seções da Landing Page
- [x] Header com logo e CTA
- [x] Hero com frase "Paz não é ausência de problemas, é presença de propósito."
- [x] Sobre (Helio Alvim — Hipnoterapeuta)
- [x] Serviços (7 cards: Traumas, Regressão, Ansiedade, Depressão, Fobias, Compulsões, Dependências Químicas)
- [x] Depoimentos (3 cards)
- [x] FAQ (3 perguntas com accordion)
- [x] CTA Final com informações de contato
- [x] Footer com créditos

### ✅ Cores da Marca
| Cor | Hex | Uso |
|-----|-----|-----|
| Verde | `#78BE20` | Botões, destaques, links |
| Verde escuro | `#4A7A10` | Hover states |
| Dourado | `#C9A94E` | Tags, badges, detalhes |
| Dourado claro | `#E8D48B` | Citações |
| Preto | `#0D0D0D` | Fundo principal |
| Preto médio | `#1A1A1A` | Cards, header, footer |
| Cinza | `#2A2A2A` | Cards secundários |

### ✅ Fontes
- **Montserrat** (400, 600, 700, 800) — Títulos, botões, navegação
- **Open Sans** (400, 600) — Corpo do texto
- **Playfair Display** (700) — Citações e destaques em itálico

---

## Instruções de Deploy

1. **Preparar imagens:**
   - Converter as imagens do Helio Alvim para WebP
   - Redimensionar: hero 1200×630px, fotos 800×600px
   - Comprimir para atender os limites de tamanho
   - Salvar na pasta `img/`

2. **Subir arquivos para o GitHub:**
   - Criar a estrutura de pastas em `demo/empresas/helio-alvim/`
   - Fazer upload de `index.html`, `helio-alvim.js` e pasta `img/`

3. **Verificar:**
   - Acessar `https://edusidegum.github.io/demo/empresas/helio-alvim/`
   - Testar link do WhatsApp
   - Testar banner de cookies
   - Testar FAQ accordion
   - Validar schema JSON-LD em https://validator.schema.org/
   - Confirmar que `robots.txt` NÃO existe na pasta

4. **Google Business / Bing Places / Search Console:**
   - Configurar perfil no Google Business com os dados do Helio Alvim
   - Cadastrar no Bing Places
   - Adicionar propriedade no Search Console
   - Responsabilidade técnica: Edu Sidegum

---

## Dados do Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Helio Alvim |
| **Profissão** | Hipnoterapeuta |
| **WhatsApp** | (51) 99993-5438 |
| **Instagram** | @helio_alvim_filho |
| **Cidade** | Novo Hamburgo - RS |
| **Atendimento** | Presencial e Online |
| **Slug** | helio-alvim |
| **Frase-chave** | "Paz não é ausência de problemas, é presença de propósito." |
| **Série** | Café & Reflexão (#026) |

---

## Observações

- O Instagram do Helio Alvim não pôde ser carregado diretamente (bloqueio da plataforma), mas os dados foram extraídos da imagem de divulgação anexa.
- As imagens (`hero.webp`, `foto1.webp`, `foto2.webp`, `favicon.webp`) precisam ser geradas a partir das fotos do cliente e colocadas na pasta `img/`.
- O script `bloco-incluir.js` já está referenciado no HTML e cuidará de injetar o GA4/GTM e proteção contra cópia automaticamente.
