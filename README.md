# InfoHub FAMINAS — Central de Autoatendimento Acadêmico

Plataforma institucional centralizadora desenvolvida no âmbito do **Projeto de Extensão Curricularizado** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **FAMINAS**, na disciplina de **Engenharia de Software**.

O **InfoHub FAMINAS** atua como diretório oficial e unificado de acesso a 15 páginas informacionais de autoatendimento acadêmico criadas pelas equipes discentes em parceria com os gestores institucionais da faculdade.

---

## 🚀 Tecnologias e Padrões Web Standards

O projeto adota estritamente os padrões de arquitetura e tecnologia definidos nas diretrizes curriculares e institucionais:

- **Estrutura:** HTML5 Semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
- **Estilização:** CSS3 puro com Variáveis Nativas (Design Tokens), CSS Grid e Flexbox, alinhado à identidade do [EducaHub](https://educahub.faminas.edu.br/mre).
- **Lógica & Comportamento:** Vanilla JavaScript moderno (ES6 Modules) — zero frameworks pesados em produção.
- **PWA (Progressive Web App):** Manifesto PWA e Service Worker com estratégia _Stale-While-Revalidate_ e suporte a funcionamento offline do shell da aplicação.
- **Modais Sobrepostos:** Diálogos e gavetas (_drawers_) nativos na própria página para conteúdos institucionais (_Sobre o Projeto_, _Termos de Uso_, _Política de Privacidade / LGPD_ e _Avisos de Homologação_).
- **Conexão Institucional & Extensão:** Atalho em destaque para o _Portal FAMINAS_ no cabeçalho responsivo e card temático oficial para o curso de graduação em _Análise e Desenvolvimento de Sistemas (ADS)_ no rodapé.
- **Ferramental de Desenvolvimento:** Vite para servidor local e build, Vitest para testes de contrato e integridade, ESLint e Prettier para qualidade.

---

## 📂 Estrutura do Repositório

```
InfoHub-Faminas/
├── public/
│   ├── manifest.json              # Manifesto oficial do Progressive Web App
│   └── assets/
│       ├── images/                # Logomarcas e fotos institucionais oficiais FAMINAS
│       └── icons/                 # Ícones PWA (192x192, 512x512, SVG)
├── src/
│   ├── css/
│   │   ├── variables.css          # Design Tokens (paleta institucional, tipografia, espaçamentos)
│   │   ├── base.css               # Reset semântico, tipografia e botões institucionais
│   │   ├── layout.css             # Cabeçalho, Hero Section e Rodapé estruturado
│   │   ├── cards.css              # Matriz de grid 5x3 no desktop e 1 coluna mobile
│   │   └── modais.css             # Estilos de modais deslizantes e drawers com backdrop blur
│   └── js/
│       ├── services-data.js       # ★ ARQUIVO CENTRAL DE DADOS (onde os 15 links são mantidos)
│       ├── cards-renderer.js      # Motor de renderização dinâmica dos 15 cards e fallback
│       ├── modal-controller.js    # Gerenciador de modais institucionais e acessibilidade
│       ├── pwa.js                 # Registro de Service Worker e botão de instalação PWA
│       └── app.js                 # Ponto de entrada modular da aplicação
├── tests/
│   ├── project-structure.test.js  # Teste de validação dos 15 temas obrigatórios
│   ├── sprint1-header-hero.test.js# Teste de cabeçalho, hero, footer e portal FAMINAS
│   ├── sprint2-cards-modais.test.js# Teste de renderização, modais e fallback declarativo
│   └── sprint3-pwa-vercel.test.js # Teste de manifesto PWA, Service Worker e Vercel
├── index.html                     # Casca semântica da aplicação
├── sw.js                          # Service Worker para cache e modo offline
├── vercel.json                    # Configuração de headers de segurança e deploy estático
└── package.json                   # Dependências de desenvolvimento e scripts
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Gerenciador de pacotes `npm`

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/InfoHub-Faminas.git
cd InfoHub-Faminas

# 2. Instale as dependências de desenvolvimento
npm install

# 3. Inicie o servidor local de desenvolvimento
npm run dev
```

Acesse a aplicação no seu navegador em `http://localhost:3000`.

### Executando Testes e Qualidade

```bash
# Executa a suíte completa de testes automatizados (Vitest)
npm test

# Executa a verificação estática do código (ESLint)
npm run lint

# Formata o código fonte (Prettier)
npm run format

# Gera o build estático de produção
npm run build
```

---

## 📝 Guia de Manutenção: Como Atualizar os 15 Setores

Para atualizar URLs, títulos, descrições ou status de qualquer um dos 15 setores acadêmicos, **NÃO é necessário alterar arquivos HTML ou CSS**.

Toda a gestão é 100% declarativa e estática, centralizada no arquivo:
👉 **[src/js/services-data.js](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/src/js/services-data.js)**

### Exemplo: Ativando a página publicada de um grupo

Suponha que a equipe do **Grupo 04 (Estágios)** publicou sua página no GitHub Pages: `https://grupo04.github.io/estagios-faminas/`.

1. Abra `src/js/services-data.js`;
2. Localize o objeto correspondente a `estagios` (ordem 4);
3. Atualize o campo `url` e modifique o `status` de `'coming_soon'` para `'active'`:

```javascript
// Antes (Em homologação):
{
  id: 'estagios',
  order: 4,
  title: 'Estágios',
  description: 'Convênios aceitos, prazos de envio do Termo de Compromisso (TCE)...',
  icon: 'work',
  url: '',
  status: 'coming_soon',
  sectorGroup: 'Grupo 04'
}

// Depois (Publicado e Ativo):
{
  id: 'estagios',
  order: 4,
  title: 'Estágios',
  description: 'Convênios aceitos, prazos de envio do Termo de Compromisso (TCE)...',
  icon: 'work',
  url: 'https://grupo04.github.io/estagios-faminas/',
  status: 'active',
  sectorGroup: 'Grupo 04'
}
```

4. Faça commit e push para o repositório GitHub. A plataforma Vercel atualizará a versão de produção automaticamente em segundos!

---

## 🌐 Deploy na Vercel

O projeto foi arquitetado para deploy estático com **custo zero** e máxima resiliência na Vercel:

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub;
2. Importe o repositório `InfoHub-Faminas`;
3. A Vercel detectará o arquivo `vercel.json` e a configuração estática;
4. Clique em **Deploy**;
5. A cada novo commit na branch principal, o deploy contínuo será executado de forma automática.

---

## 📱 Instalação como Aplicativo (PWA)

- **No Celular (Android / iOS):** Ao abrir o site pelo navegador Chrome ou Safari, toque no badge em destaque **"Instalar App"** na seção principal (Hero) ou selecione _"Adicionar à Tela de Início"_.
- **No Computador (Chrome / Edge):** O badge em destaque **"Instalar App"** no Hero ou o ícone de instalação na barra de endereços do navegador permite adicionar o InfoHub diretamente à área de trabalho como aplicativo nativo.

---

## 🤖 Transparência e Uso de Inteligência Artificial

Em consonância com as diretrizes de integridade acadêmica, ética e transparência tecnológica, declara-se que o desenvolvimento deste projeto contou com o auxílio de ferramentas de **Inteligência Artificial (IA) Generativa** atuando como copiloto técnico e assistente de produtividade.

### Atividades Apoiadas por IA:

- **Prototipação e Código:** Apoio na estruturação inicial de componentes Web Standards (HTML5 semântico, CSS3 com variáveis nativas e Vanilla JavaScript modular);
- **Qualidade e Testes:** Geração e parametrização de cenários de testes automatizados unitários e de integração (Vitest);
- **Acessibilidade e Documentação:** Refinamento de boas práticas de acessibilidade (ARIA, WCAG) e auxílio na redação técnica de especificações e relatórios.

### Supervisão e Governança Humana:

O uso de IA foi estritamente assistivo e supervisionado. Todas as etapas críticas — incluindo elicitação de requisitos em campo, mapeamento de processos com gestores setoriais da FAMINAS, decisões arquiteturais, revisão e homologação do código-fonte e veracidade das informações acadêmicas — foram de responsabilidade integral e exclusiva dos estudantes e do corpo docente da disciplina de **Engenharia de Software** do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

---

## ⚖️ Licença e Responsabilidade

Iniciativa acadêmica extensionista da **FAMINAS — Faculdade de Minas**.  
Coordenação do Curso de Análise e Desenvolvimento de Sistemas (ADS).  
Disciplina: Engenharia de Software.
