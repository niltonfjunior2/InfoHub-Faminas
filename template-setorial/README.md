# Template Setorial — InfoHub FAMINAS

Estrutura padrão de desenvolvimento para os grupos discentes da disciplina de **Engenharia de Software** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **FAMINAS**.

Este repositório serve como base técnica e visual obrigatória para a criação da página de autoatendimento do setor institucional atribuído à sua equipe no **Projeto de Extensão Universitária**.

---

## 🎯 Objetivo da Atividade

Após realizarem as entrevistas empíricas com a gestão do setor sorteado e mapearem os requisitos, dores dos alunos, processos oficiais e canais de contato, cada equipe discente deve construir a página de autoatendimento daquele setor.

Para garantir que o ecossistema digital da FAMINAS mantenha coerência, credibilidade e alto padrão estético, **todas as páginas setoriais devem seguir rigorosamente esta estrutura base**.

---

## 🛡️ Regras e Padrões Obrigatórios

### 1. O que NÃO pode ser alterado ❌
* **Cores Institucionais e Tipografia:** Não altere o arquivo `css/variables.css` nem os estilos em `css/base.css`. O esquema de cores institucional (Azul Marinho, Ciano FAMINAS, Branco Puro e Neutros) é imutável.
* **Cabeçalho (Header):** O logotipo oficial da FAMINAS, o título `InfoHub FAMINAS` e o botão `"Retornar ao InfoHub"` devem ser mantidos intactos.
* **Rodapé (Footer):** O rodapé com as assinaturas da FAMINAS, créditos curriculares do curso de ADS, card de destaque para o curso de ADS e os botões dos modais institucionais (*Sobre o Projeto*, *Termos de Uso* e *Política de Privacidade*) **deve permanecer rigorosamente inalterado**.
* **Zero Banco de Dados & Zero Frameworks Pesados:** Não utilize bibliotecas ou frameworks como React, Vue, Angular, Bootstrap, Tailwind, Supabase ou Firebase. O projeto adota **Vanilla Web Standards** (HTML5 semântico, CSS3 e JavaScript puro).

### 2. O que DEVE ser personalizado pela equipe ✅
* **Título da Página (`<title>` e `<meta description>`):** Insira o nome do seu setor (ex: `Achados e Perdidos — InfoHub FAMINAS`).
* **Seção Hero:** 
  * Altere o título `Setor: <span>[Nome do Setor]</span>` para o nome do setor atendido.
  * Atualize o parágrafo explicativo com o propósito e resumo do setor apurados durante a entrevista.
* **Área Central (Features / Conteúdo Setorial):**
  * **Liberdade total de modelagem e conteúdo!**
  * Vocês podem estruturar o conteúdo com base na entrevista com o gestor do setor:
    * Mapeamento dos principais serviços e requerimentos;
    * Fluxograma ou passo a passo sequencial dos procedimentos;
    * Prazos, calendários e taxas aplicáveis;
    * Canais oficiais de contato (e-mail, ramal, WhatsApp, localização física no campus);
    * Perguntas frequentes (FAQ) para sanar as dúvidas mais recorrentes da comunidade.
  * Para criar novos estilos ou ajustar os componentes da área central, edite exclusivamente o arquivo `css/custom.css`.
* **Lógica JavaScript Opcional:**
  * Se desejarem adicionar comportamentos interativos (ex: copiar dados de contato para a área de transferência, filtros de busca ou cálculos), utilizem o arquivo `js/app.js`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html              # Estrutura principal da página com marcações de edição
├── assets/
│   └── images/
│       └── logo-faminas.png # Logotipo institucional oficial em alta resolução
├── css/
│   ├── variables.css       # [NÃO ALTERAR] Tokens e cores institucionais
│   ├── base.css            # [NÃO ALTERAR] Reset semântico e tipografia oficial
│   ├── layout.css          # [NÃO ALTERAR] Estrutura do Header, Hero e Footer
│   ├── modais.css          # [NÃO ALTERAR] Estilos dos modais sobrepostos
│   └── custom.css          # [ÁREA LIVRE] Folha de estilos para o conteúdo do seu setor
├── js/
│   ├── modal-controller.js # [NÃO ALTERAR] Lógica dos modais com nota ética de IA e LGPD
│   └── app.js              # [ÁREA LIVRE] Ponto de entrada JavaScript para scripts da equipe
└── README.md               # Este guia de orientações
```

---

## 🚀 Como Começar (Passo a Passo)

### 1. Criando a sua cópia no GitHub (Fork)
1. Clique no botão **Fork** (canto superior direito da página deste repositório no GitHub).
2. Selecione a sua conta ou a organização da sua equipe discente.
3. Defina o nome do repositório no padrão sugerido pelo professor:  
   `infohub-[nome-do-setor]` (exemplo: `infohub-estagios`, `infohub-achados-perdidos`).
4. Clique em **Create Fork**.

### 2. Clonando e Executando Localmente
1. Clone o seu fork para a sua máquina:
   ```bash
   git clone https://github.com/SEU_USUARIO/infohub-seu-setor.git
   ```
2. Abra a pasta do projeto no **Visual Studio Code**:
   ```bash
   cd infohub-seu-setor
   code .
   ```
3. Para testar a página:
   * **Opção 1 (Direta):** Dê um duplo clique no arquivo `index.html` e ele abrirá no seu navegador.
   * **Opção 2 (Recomendada):** Instale a extensão **Live Server** no VS Code, clique com o botão direito no `index.html` e selecione **Open with Live Server**.

---

## 🌐 Publicação no GitHub Pages (Deploy Gratuito)

Para que a sua página fique online e o link possa ser integrado à landing page oficial do **InfoHub FAMINAS**, siga estas etapas:

1. No repositório do seu fork no GitHub, acesse a aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment**:
   * Em **Source**, selecione **Deploy from a branch**.
   * Em **Branch**, selecione `main` (ou `master`) e na pasta selecione `/ (root)`.
   * Clique em **Save**.
4. Aguarde de 1 a 2 minutos. O GitHub fornecerá o link público da sua página, no formato:
   ```text
   https://SEU_USUARIO.github.io/infohub-seu-setor/
   ```
5. Teste o link no celular e no computador para verificar se tudo está carregando perfeitamente.

---

## ✅ Checklist de Entrega da Equipe

Antes de submeter o link final ao professor orientador, certifique-se de que sua página cumpre todos os itens:

- [ ] **Fidelidade Visual:** Cores, logos e tipografia oficiais FAMINAS mantidas sem distorções.
- [ ] **Navbar:** Botão `"Retornar ao InfoHub"` funcionando e apontando para o hub central.
- [ ] **Hero Personalizado:** Nome e resumo do setor devidamente preenchidos.
- [ ] **Conteúdo Relevante:** Informações reais apuradas nas entrevistas com os gestores setoriais.
- [ ] **Semântica HTML5:** Utilização de tags semânticas (`<section>`, `<article>`, `<header>`, `<h2>`, `<ol>`, `<details>`).
- [ ] **Responsividade Mobile:** A página se adapta perfeitamente a smartphones, tablets e computadores.
- [ ] **Modais Institucionais:** Os botões do rodapé (*Sobre o Projeto*, *Termos de Uso*, *Política de Privacidade*) abrem os modais corretamente.
- [ ] **GitHub Pages Ativo:** A página está acessível publicamente via link HTTPS do GitHub Pages sem erros 404 de imagens ou scripts.
