# PROJECT_DNA.md — INFOHUB FAMINAS

---

## 1. VISÃO DO PROJETO
O **InfoHub FAMINAS** é a plataforma institucional centralizadora (Landing Page Hub & PWA) das soluções informacionais desenvolvidas pelos estudantes do curso de Análise e Desenvolvimento de Sistemas (ADS) na disciplina de Engenharia de Software da **FAMINAS**. O sistema atua como o ponto único de entrada para que a comunidade acadêmica (alunos, docentes, colaboradores e público externo) acerte e resolva suas principais dúvidas e necessidades em 15 setores institucionais críticos, através de autoatendimento ágil, moderno e padronizado.

---

## 2. OBJETIVOS
* **Objetivo Primário:** Centralizar o acesso a 15 páginas informacionais setoriais criadas pelos grupos discentes do projeto de extensão, organizadas em um grid institucional intuitivo.
* **Fidelidade Institucional:** Replicar integralmente a identidade visual, padrões de design, tipografia e sobriedade do ecossistema digital da FAMINAS (referência: *EducaHub* - `https://educahub.faminas.edu.br/mre` e portal institucional).
* **Acessibilidade Mobile & PWA:** Entregar uma experiência *Mobile-First*, permitindo a instalação do hub como aplicativo nativo no smartphone do estudante (Progressive Web App com funcionamento de shell offline).
* **Independência e Zero Custo:** Garantir manutenção declarativa e zero dependência de infraestruturas pagas ou bancos de dados, viabilizando deploy estático instantâneo na Vercel e versionamento público no GitHub.
* **Conexão Institucional:** Destacar o acesso oficial ao portal UNIFAMINAS (`https://www.unifaminas.edu.br/principal`) e prover transparência legal/pedagógica via modais integrados.

---

## 3. DRIVERS ARQUITETURAIS (PRIORIZADOS)
1. **Fidelidade Institucional (Prioridade 1):** Rigor estético com a paleta institucional (Navy Blue, Branco, Cinza Neutro, destaques ciano/azul FAMINAS), tipografia padrão (*Roboto* / *Red Hat Display* / *Montserrat*), ícones *Material Symbols* e componentes com acabamento profissional.
2. **Simplicidade de Manutenção (Prioridade 2):** Estrutura orientada a dados desacoplados. Atualizar links, títulos ou status dos 15 setores deve exigir apenas a alteração de um arquivo estático (`services.json` ou `config.js`), sem mexer em código HTML/CSS/JS.
3. **Performance e Leveza (Prioridade 3):** Shell estático puro em Vanilla HTML5, CSS3 moderno e Vanilla JavaScript, com pontuação Lighthouse > 90, carregamento instantâneo e suporte offline via Service Worker.
4. **Tempo de Entrega (Prioridade 4):** Arquitetura enxuta, sem frameworks pesados de compilação desnecessários, acelerando a disponibilização para os alunos e gestores.

---

## 4. RESTRIÇÕES INVIOLÁVEIS
* **Zero Banco de Dados:** Nenhuma dependência de SGBD (SQL ou NoSQL) ou backends com estado. O catálogo é 100% declarativo e estático.
* **Zero Framework Pesado de SPA:** Construção limpa em HTML5 Semântico, CSS3 (Custom Properties / Flexbox / Grid) e Vanilla JavaScript puro (ES6+), conforme diretrizes do Guia de Extensão.
* **Segurança e Privacidade (LGPD):** O hub não coleta nem armazena cookies invasivos, telemetria identificável ou credenciais do usuário.
* **Hospedagem Estática Gratuita:** Total compatibilidade com hospedagem estática Vercel e repositório Git/GitHub.
* **Links Externos Seguros:** Links externos abrem em nova aba com atributos obrigatórios `target="_blank" rel="noopener noreferrer"`.
* **Drawers / Modais Nativos:** Páginas institucionais de apoio ("Sobre o Projeto", "Termos de Uso", "Política de Privacidade") e avisos de status devem abrir exclusivamente em modais/drawers na própria página, sem redirecionamento que quebre a experiência do PWA.

---

## 5. DECISÕES POR DIMENSÃO

| Dimensão | Decisão Arquitetural | Justificativa |
| :--- | :--- | :--- |
| **1. Escopo & Propósito** | Hub estático de autoatendimento com 15 cards setoriais | Atende à necessidade da comunidade acadêmica por orientação rápida e sem ruído. |
| **2. Domínio de Negócio** | Catálogo fixo dos 15 temas sorteados no Guia do Projeto | Alinhamento direto com o plano pedagógico de extensão curricular de ADS da FAMINAS. |
| **3. Restrições** | Client-side puro + Vercel Static Deploy | Custo zero, sem manutenção de servidores, sem vulnerabilidades de backend. |
| **4. Atores & Segurança** | Acesso público anônimo; sem autenticação centralizada | Consulta pública e direta por alunos, candidatos e comunidade externa. |
| **5. Experiência de Uso** | Mobile-First, grid 5x3 no desktop, modais deslizantes | Otimização para smartphone (maior tráfego dos alunos) mantendo elegância no desktop. |
| **6. Dados** | Arquivo estático desacoplado `data/services.js` (ou JSON) | Manutenção simples por professores/monitores sem risco de corrupção do layout. |
| **7. Processamento** | Renderização dinâmica client-side de cards a partir do arquivo de dados | Facilidade de injeção de status ("ativo" ou "em_breve") e tratamento declarativo. |
| **8. Conectividade** | Service Worker PWA com Cache-First para Assets / Shell | Disponibilidade do catálogo mesmo sob oscilações de rede no campus. |
| **9. Ecossistema** | GitHub Pages (alunos) + Vercel (Hub Central) + Portal UNIFAMINAS | Desacoplamento federado: cada grupo mantém seu projeto sem derrubar o hub. |
| **10. Cultura Técnica** | Vanilla Web Standards (HTML5, CSS3, JS ES6) | Domínio direto pelos estudantes de ADS, sem atritos de dependências npm em produção. |
| **11. Observabilidade** | Vercel Analytics nativo ou Web Vitals (opcional sem cookies) | Monitoramento de disponibilidade e tempo de resposta sem violar privacidade. |
| **12. Qualidade** | PWA Lighthouse Score > 90, Acessibilidade WCAG AA | Inclusão de estudantes com deficiência e experiência de alta fidelidade visual. |

---

## 6. ARQUITETURA LÓGICA
* **View Layer (Interface):** 
  * Header Institucional (Logo FAMINAS, badge de identificação de extensão, atalho para o portal oficial UNIFAMINAS).
  * Hero Section (Título do InfoHub, propósito de autoatendimento discente, subtítulo institucional).
  * Grid de Serviços (Container dinâmico com 15 cards, renderizados a partir do catálogo).
  * Componente de Drawer/Modal (Gerenciador de janelas sobrepostas para "Sobre o Projeto", "Termos de Uso", "Política de Privacidade" e "Serviço em Breve").
  * Rodapé Institucional (Assinatura FAMINAS, créditos de Engenharia de Software ADS, links institucionais e direitos reservados).
* **Data Layer:**
  * Catálogo de Serviços (`services.js`): Array de objetos estruturados com `id`, `order`, `title`, `description`, `icon`, `url`, `status` (`active` | `coming_soon`).
* **Service Layer:**
  * Modal Controller: Abertura/fechamento com suporte a tecla `Escape`, clique no backdrop e bloqueio de rolagem corporal (`overflow: hidden`).
  * PWA Controller: Registro do Service Worker (`sw.js`), escuta do evento `beforeinstallprompt` e botão/banner discreto de instalação do app.

---

## 7. ARQUITETURA FÍSICA E DE DISTRIBUIÇÃO
```
[ Usuário Final / Discente ]
       │
       ▼ (HTTPS / PWA)
[ Vercel CDN Edge Network ] ── Cache Estático Global
       │
  ┌────┴──────────────────────────────┐
  │  InfoHub FAMINAS (SPA Estática)   │
  │  ├── index.html                   │
  │  ├── css/ (design tokens/estilos) │
  │  ├── js/ (app.js, data.js, pwa.js)│
  │  ├── assets/ (logos, ícones)      │
  │  └── sw.js + manifest.json        │
  └───────────────────────────────────┘
       │
       ├─ (Link Externo / Nova Aba) ──> [ Portal UNIFAMINAS (Site Oficial) ]
       │
       └─ (Links Declarativos Externos) ──> [ 15 Páginas GitHub Pages dos Alunos ]
```

---

## 8. STACK TECNOLÓGICA JUSTIFICADA
* **Linguagem Base:** HTML5 Semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<dialog>/<aside>`, `<footer>`).
* **Estilização:** CSS3 puro com Variáveis CSS (Custom Properties) espelhando as cores e tipografia de `educahub.faminas.edu.br`. Flexbox para alinhamentos finos e CSS Grid para a matriz 5x3 / 1x1.
* **Lógica e Dinâmica:** Vanilla JavaScript (ES6 Modules). Sem frameworks como React, Angular ou Vue, eliminando complexidade de build, tamanhos pesados de bundle e quebras de versão.
* **PWA & Offline:** Web App Manifest (`manifest.json`) e Service Worker padrão para cache dos arquivos estáticos institucionais e logos.
* **Tipografia:** Google Fonts (`Roboto`, `Montserrat`, `Red Hat Display`) e Material Symbols Outlined.
* **Deploy & CI/CD:** Repositório GitHub com deploy automático na Vercel a cada push na branch principal.

---

## 9. ESTRATÉGIA DE SEGURANÇA
* **Headers HTTP na Vercel:** Configuração no `vercel.json` com `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` e `Referrer-Policy: strict-origin-when-cross-origin`.
* **Isolamento de Links Externos:** Todo link externo possui rigorosamente `rel="noopener noreferrer"` e `target="_blank"` para mitigar riscos de *tabnabbing*.
* **Zero Superfície de Ataque Backend:** Por ser estático e sem persistência em banco de dados, o sistema é imune a SQL Injection, Server-Side Command Injection e vazamento de banco de dados.

---

## 10. ESTRATÉGIA DE DADOS (CATÁLOGO DOS 15 TEMAS)
Os 15 setores mapeados no Guia de Extensão são definidos de forma imutável e estruturada:
1. *Acesso Institucional Perdido*
2. *Achados e Perdidos*
3. *CPA (Comissão Própria de Avaliação)*
4. *Estágios*
5. *Formatura e Colação de Grau*
6. *Funcionamento das Dependências*
7. *Consultas nas Clínicas-Escola*
8. *Horas Complementares*
9. *Iniciação Científica na FAMINAS*
10. *Matrícula e Renovação de Matrícula*
11. *Revista Científica da FAMINAS*
12. *Apoio Psicopedagógico (NAP)*
13. *Carteirinha Estudantil (1ª e 2ª via)*
14. *Trabalho de Conclusão de Curso (TCC)*
15. *Uso do Complexo Esportivo*

---

## 11. ESTRATÉGIA OPERACIONAL & OBSERVABILIDADE
* **Atualização de Links:** O mantenedor abre `js/services-data.js`, altera a propriedade `url` e muda `status: "active"` (ou `"coming_soon"`). Um simples commit no repositório atualiza a produção na Vercel em menos de 30 segundos.
* **Observabilidade:** Monitoramento pelo painel da Vercel (Speed Insights e Analytics sem cookies).

---

## 12. RISCOS E MITIGAÇÕES
* **Risco 1:** *Aluno clica em card cujo grupo ainda não publicou o site.*
  * **Mitigação:** Tratamento declarativo: card com `status: "coming_soon"` intercepta o clique e abre modal informando que o serviço está em fase de validação/homologação pedagógica com botão de fechamento.
* **Risco 2:** *URL de um grupo mudar após a entrega final.*
  * **Mitigação:** Como o catálogo está isolado em um único arquivo, a edição é pontual e imediata.
* **Risco 3:** *Página externa de um aluno ficar instável.*
  * **Mitigação:** Como o link abre em nova aba, a landing page InfoHub permanece íntegra, ativa e disponível no smartphone ou computador do usuário.

---

## 13. TRADE-OFFS ACEITOS
* **Sem detecção de status online em tempo real via ping:** Devido ao bloqueio de CORS em navegadores para requisições cross-domain com GitHub Pages, o status é mantido de forma declarativa e confiável pelo arquivo de configuração.
* **Sem banco de dados para gestão de conteúdo:** Substituído por arquivo de dados estático, priorizando custo zero, máxima velocidade e estabilidade total.
