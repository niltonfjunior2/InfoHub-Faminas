# IMPLEMENTATION_PLAN.md — INFOHUB FAMINAS

---

## 1. VISÃO DO ROADMAP E CRONOLOGIA DE ENTREGAS
O plano de implementação do **InfoHub FAMINAS** foi executado com sucesso em **3 Sprints Sequenciais**, todas 100% concluídas e validadas.

```mermaid
gantt
    title Cronograma de Implementação — InfoHub FAMINAS (Status: CONCLUÍDO)
    dateFormat  YYYY-MM-DD
    section Sprint 01
    Design System & Shell Institucional        :done, s1, 2026-09-04, 1d
    section Sprint 02
    Catálogo 15 Cards, Fallback & Modais       :done, s2, after s1, 1d
    section Sprint 03
    PWA, Vercel Deploy & Homologação           :done, s3, after s2, 1d
```

---

## 2. DETALHAMENTO DAS SPRINTS EXECUTADAS

### SPRINT 01: FUNDAÇÃO VISUAL INSTITUCIONAL & DESIGN SYSTEM
* **Status:** CONCLUÍDA (100%)
* **Objetivo:** Estabelecer o Design System oficial FAMINAS/EducaHub, tipografia, tokens de cor, cabeçalho institucional com atalho para o site oficial e a estrutura semântica base.
* **Marcos de Entrega (Milestone 1 - ALCANÇADO):** Shell visual institucional responsivo e aprovado.
* **Entregas Técnicas Validadas:**
  1. [x] Estruturação da árvore de diretórios (`/public`, `/src/css`, `/src/js`, `/tests`).
  2. [x] Arquivo de tokens de design `src/css/variables.css` espelhando a paleta oficial da FAMINAS e do EducaHub.
  3. [x] Reset semântico e tipografia com Google Fonts em `src/css/base.css`.
  4. [x] Cabeçalho institucional com a logomarca da FAMINAS e botão em destaque direcionando para `https://www.unifaminas.edu.br/principal` com `target="_blank" rel="noopener noreferrer"`.
  5. [x] Seção Hero institucional apresentando a extensão acadêmica de ADS/Engenharia de Software.
  6. [x] Rodapé institucional com botões acessíveis para modais e créditos acadêmicos.

---

### SPRINT 02: CATÁLOGO DOS 15 SETORES, MODAIS DESLIZANTES & FALLBACK
* **Status:** CONCLUÍDA (100%)
* **Objetivo:** Implementar o catálogo dinâmico declarativo com os 15 temas setoriais, grid 5x3 no desktop / 1 coluna no mobile, sistema de modais sobrepostos para textos legais/institucionais e aviso de indisponibilidade com opção de retorno.
* **Marcos de Entrega (Milestone 2 - ALCANÇADO):** Catálogo de 15 cards interativo e modais institucionais 100% operacionais.
* **Entregas Técnicas Validadas:**
  1. [x] Catálogo declarativo em `src/js/services-data.js` contendo os 15 setores oficiais do Guia de Extensão.
  2. [x] Motor de renderização dinâmica `src/js/cards-renderer.js` com suporte a teclado e atributos acessíveis.
  3. [x] Regras de CSS Grid em `src/css/cards.css` com 3 colunas fixas no desktop (matriz 5x3) e 1 coluna vertical no mobile.
  4. [x] Módulo `src/js/modal-controller.js` e estilos `src/css/modais.css` com suporte a drawers móveis, backdrop blur, bloqueio de scroll e tecla `Escape`.
  5. [x] Modais com textos completos: *Sobre o Projeto*, *Termos de Uso*, *Política de Privacidade / LGPD* e *Aviso de Homologação Discente com botão de retorno à tela inicial*.

---

### SPRINT 03: RECURSOS PWA, CONEXÃO OFFLINE, DEPLOY VERCEL & AUDITORIA
* **Status:** CONCLUÍDA (100%)
* **Objetivo:** Adicionar capacidade de aplicativo móvel instalável (PWA), suporte a funcionamento offline para o shell da aplicação, configuração para deploy na Vercel e validação de acessibilidade e performance.
* **Marcos de Entrega (Milestone 3 - ALCANÇADO):** PWA pronto para produção na Vercel e instalável em smartphones e desktops.
* **Entregas Técnicas Validadas:**
  1. [x] Manifesto PWA completo em `public/manifest.json` com ícones em alta resolução (192x192, 512x512 e SVG).
  2. [x] Service Worker `sw.js` com pré-cache e estratégia *Stale-While-Revalidate* e suporte offline.
  3. [x] Módulo `src/js/pwa.js` e botão institucional *"Instalar App"* acionado via `beforeinstallprompt`.
  4. [x] Configuração `vercel.json` com headers de segurança (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`) e invalidação de cache para o Service Worker.
  5. [x] Documentação técnica e manual de governança no [README.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/README.md).
  6. [x] Suíte de 19 testes automatizados via Vitest com 100% de taxa de aprovação.

---

## 3. MATRIZ DE RISCOS E CONTINGÊNCIA VALIDADA

| Risco | Status Pós-Sprint | Mitigação Efetiva |
| :--- | :---: | :--- |
| **Atraso na entrega dos sites dos 15 grupos** | Mitigado | Catálogo declarativo com status `"coming_soon"`, exibindo modal de homologação e botão de retorno sem quebrar a experiência do usuário. |
| **Quebra de layout no grid 5x3 em tablets/smartphones** | Mitigado | CSS Grid configurado com 1 coluna (< 640px), 2 colunas (640-1023px) e 3 colunas fixas ($\ge$ 1024px). |
| **Bloqueio de cache após atualização de links** | Mitigado | Cabeçalho `Cache-Control: no-cache` no `vercel.json` para `sw.js` e `self.skipWaiting()`. |
| **Incompatibilidade com PWA no iOS** | Mitigado | Meta tags `apple-mobile-web-app-capable` e link `apple-touch-icon`. |

---

## 4. CRITÉRIOS DE PRONTIDÃO PARA PRODUÇÃO (DEFINITION OF DONE)
- [x] Todos os 15 cards setoriais renderizados na ordem pedagógica do Guia.
- [x] Grid 5x3 no desktop e 1 coluna em smartphones.
- [x] Botão oficial UNIFAMINAS em destaque no cabeçalho.
- [x] Todos os 4 modais funcionais com transições suaves e acessibilidade.
- [x] Fallback declarativo operacional para serviços em desenvolvimento.
- [x] 19 testes automatizados aprovados no Vitest.
- [x] Zero erros ou avisos no linter ESLint.
- [x] PWA instalável com Service Worker e manifesto válidos.
- [x] Compatibilidade total com deploy estático na Vercel e GitHub.
