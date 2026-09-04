# PRODUCT_BACKLOG.md — INFOHUB FAMINAS

---

## VISÃO GERAL DO BACKLOG
Este documento consolida o Product Backlog do **InfoHub FAMINAS**, derivado rigorosamente das decisões estratégicas do [PROJECT_DNA.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/PROJECT_DNA.md) e do Guia Oficial do Projeto de Extensão. O backlog foi concluído integralmente após a execução das Sprints 01, 02 e 03.

---

## EPIC 01: IDENTIDADE INSTITUCIONAL & DESIGN SYSTEM FAMINAS
*Status do Epic: **CONCLUÍDO (100%)***

### Feature 1.1: Design Tokens & Layout Base Institucional
* **Status:** CONCLUÍDO (Sprint 01)
* **Prioridade:** Essencial (Alta)
* **Dependências:** Nenhuma

#### User Story US01 — Interface e Estilo Visual Institucional
* **Status:** Entregue e Aprovado
> **Como** membro da comunidade acadêmica da FAMINAS,  
> **Eu quero** acessar uma interface com as cores, tipografia e logomarcas oficiais da instituição,  
> **Para que** eu tenha total segurança e confiança de que se trata de um canal oficial e legítimo da faculdade.

**Critérios de Aceite:**
* [x] **CA01.1 (Cores):** Utilizar paleta alinhada ao EducaHub/FAMINAS: Azul Marinho Institucional (`#0B1B29`), Azul Destaque/Primário (`#005691` / `#0072CE`), Fundos claros (`#F8F9FA` e `#FFFFFF`) e bordas suaves (`#E2E8F0`).
* [x] **CA01.2 (Tipografia):** Carregamento das famílias de fontes `Roboto`, `Montserrat` e `Red Hat Display` via Google Fonts.
* [x] **CA01.3 (Logomarca):** Utilização da imagem institucional oficial presente no projeto (`padroes/logo-faminas.png`) com proporções perfeitas e atributo alt.
* [x] **CA01.4 (Hero Section):** Seção principal contendo título do InfoHub, identificação do projeto de extensão de ADS e frase de boas-vindas ao autoatendimento.

---

## EPIC 02: CATÁLOGO DE SERVIÇOS SETORIAIS (GRID 5x3 & MOBILE-FIRST)
*Status do Epic: **CONCLUÍDO (100%)***

### Feature 2.1: Grid de 15 Cards com Renderização Declarativa
* **Status:** CONCLUÍDO (Sprint 02)
* **Prioridade:** Essencial (Alta)
* **Dependências:** Feature 1.1

#### User Story US02 — Navegação e Acesso aos 15 Setores
* **Status:** Entregue e Aprovado
> **Como** aluno ou colaborador da FAMINAS,  
> **Eu quero** visualizar os 15 setores organizados de forma clara e limpa,  
> **Para que** eu encontre o serviço desejado com apenas um toque ou clique.

**Critérios de Aceite:**
* [x] **CA02.1 (Matriz 5x3 no Desktop):** Em telas desktop ($\ge$ 1024px), os cards estão dispostos em 5 linhas com 3 cards por linha (`grid-template-columns: repeat(3, 1fr)`).
* [x] **CA02.2 (Responsividade Mobile-First):** Em smartphones, o grid colapsa fluidamente para 1 coluna vertical com alvos de toque amplos.
* [x] **CA02.3 (Lista Completa dos 15 Temas):** O catálogo contém exatamente os 15 temas definidos no Guia do Projeto de Extensão:
  1. Acesso Institucional Perdido
  2. Achados e Perdidos
  3. CPA (Comissão Própria de Avaliação)
  4. Estágios
  5. Formatura e Colação de Grau
  6. Funcionamento das Dependências
  7. Consultas nas Clínicas-Escola
  8. Horas Complementares
  9. Iniciação Científica na FAMINAS
  10. Matrícula e Renovação de Matrícula
  11. Revista Científica da FAMINAS
  12. Apoio Psicopedagógico (NAP)
  13. Carteirinha Estudantil (1ª e 2ª via)
  14. Trabalho de Conclusão de Curso (TCC)
  15. Uso do Complexo Esportivo
* [x] **CA02.4 (Links Seguros em Nova Janela):** Cards ativos abrem a página externa em nova aba com `target="_blank" rel="noopener noreferrer"`.

### Feature 2.2: Gestão Declarativa de Indisponibilidade e Fallback
* **Status:** CONCLUÍDO (Sprint 02)
* **Prioridade:** Essencial (Média-Alta)
* **Dependências:** Feature 2.1

#### User Story US03 — Feedback de Serviço em Desenvolvimento
* **Status:** Entregue e Aprovado
> **Como** usuário do InfoHub,  
> **Eu quero** receber um aviso educado e claro caso o link de um setor ainda não tenha sido publicado,  
> **Para que** eu não me depare com páginas de erro 404 externas e saiba quando a solução estará homologada.

**Critérios de Aceite:**
* [x] **CA03.1 (Status Declarativo):** Se no arquivo de dados o item possuir `status: "coming_soon"`, o clique não redireciona para páginas quebradas.
* [x] **CA03.2 (Aviso com Opção de Retorno):** Abertura de modal com aviso de homologação e botão de destaque *"Retornar à página principal"*.

---

## EPIC 03: CONEXÃO INSTITUCIONAL & CONTEÚDOS DE APOIO
*Status do Epic: **CONCLUÍDO (100%)***

### Feature 3.1: Destaque ao Portal Oficial UNIFAMINAS
* **Status:** CONCLUÍDO (Sprint 01)
* **Prioridade:** Alta
* **Dependências:** Feature 1.1

#### User Story US04 — Acesso Rápido ao Portal Oficial
* **Status:** Entregue e Aprovado
> **Como** visitante ou estudante,  
> **Eu quero** ter um botão em evidência para o site oficial da instituição,  
> **Para que** eu possa acessar serviços gerais da faculdade fora do escopo deste hub.

**Critérios de Aceite:**
* [x] **CA03.1 (Link Destacado):** Botão fixado no cabeçalho direcionando para `https://www.unifaminas.edu.br/principal`.
* [x] **CA03.2 (Segurança):** Abertura em nova aba com `target="_blank" rel="noopener noreferrer"`.

### Feature 3.2: Modais Sobrepostos para Conteúdos Institucionais (Sobre, Termos, Privacidade)
* **Status:** CONCLUÍDO (Sprint 02)
* **Prioridade:** Média
* **Dependências:** Feature 1.1

#### User Story US05 — Consulta a Informações Legais e Pedagógicas em Modais
* **Status:** Entregue e Aprovado
> **Como** usuário do InfoHub,  
> **Eu quero** ler a descrição do projeto de extensão, os termos de uso e a política de privacidade em modais na própria página,  
> **Para que** eu continue no aplicativo sem precisar recarregar a tela ou ser redirecionado para outro site.

**Critérios de Aceite:**
* [x] **CA05.1 (Modal Sobre o Projeto):** Contextualização da disciplina de Engenharia de Software de ADS e dos 15 setores.
* [x] **CA05.2 (Modal Termos de Uso):** Especificação do caráter educacional e informacional dos protótipos acadêmicos.
* [x] **CA05.3 (Modal Política de Privacidade):** Declaração formal de conformidade com a LGPD e ausência de coleta de dados pessoais sensíveis.
* [x] **CA05.4 (Usabilidade e Acessibilidade):** Fechamento via botão "X", tecla `Escape`, clique no backdrop e foco acessível.

---

## EPIC 04: PWA (PROGRESSIVE WEB APP) & PRONTIDÃO PARA DEPLOY
*Status do Epic: **CONCLUÍDO (100%)***

### Feature 4.1: Capacidade PWA e Manifesto
* **Status:** CONCLUÍDO (Sprint 03)
* **Prioridade:** Média
* **Dependências:** Feature 1.1, Feature 2.1

#### User Story US06 — Instalação do InfoHub no Smartphone
* **Status:** Entregue e Aprovado
> **Como** discente da FAMINAS,  
> **Eu quero** instalar o InfoHub na tela inicial do meu celular como um aplicativo,  
> **Para que** eu tenha um atalho permanente para resolver qualquer dúvida no campus.

**Critérios de Aceite:**
* [x] **CA06.1 (Web App Manifest):** `manifest.json` com `name: "InfoHub FAMINAS"`, `short_name: "InfoHub FAMINAS"`, cores de tema (`#0B1B29`), display `standalone` e ícones 192x192, 512x512 e SVG.
* [x] **CA06.2 (Service Worker):** Arquivo `sw.js` com estratégia *Stale-While-Revalidate* e suporte a funcionamento offline do shell.
* [x] **CA06.3 (Botão de Instalação):** Botão nativo *"Instalar App"* acionado no cabeçalho via evento `beforeinstallprompt`.

### Feature 4.2: Configuração de Deploy Estático na Vercel
* **Status:** CONCLUÍDO (Sprint 03)
* **Prioridade:** Média
* **Dependências:** Todas as features anteriores

#### User Story US07 — Deploy Contínuo sem Servidor
* **Status:** Entregue e Aprovado
> **Como** professor coordenador / administrador do repositório,  
> **Eu quero** que qualquer commit no GitHub seja publicado instantaneamente na Vercel,  
> **Para que** a manutenção seja instantânea e com zero custo operacional.

**Critérios de Aceite:**
* [x] **CA07.1 (vercel.json):** Headers de segurança (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`) e invalidação de cache para o Service Worker.
* [x] **CA07.2 (README e Governança):** Guia prático no [README.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/README.md) explicando como atualizar os 15 links e executar deploy contínuo.
