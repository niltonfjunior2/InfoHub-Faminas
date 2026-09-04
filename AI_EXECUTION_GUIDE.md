# AI_EXECUTION_GUIDE.md — DIRETRIZES DE ENGENHARIA PARA IAs

---

## 1. REGRAS ARQUITETURAIS INVIOLÁVEIS
Qualquer Inteligência Artificial ou desenvolvedor que atue no código deste projeto deve respeitar obrigatoriamente as seguintes regras:

1. **PROIBIDO USO DE BANCO DE DADOS:** Não adicione conexões com Supabase, Firebase, MongoDB, PostgreSQL ou qualquer backend com banco de dados. Os dados de serviços devem residir unicamente em arquivo estático desacoplado (`js/services-data.js`).
2. **PROIBIDO ADIÇÃO DE FRAMEWORKS PESADOS DE SPA:** Não introduza React, Angular, Vue, Next.js ou Nuxt neste projeto. O código deve permanecer em HTML5 Semântico, CSS3 puro e Vanilla JavaScript (ES6 Modules).
3. **ISOLAMENTO DE LINKS EXTERNOS:** Todo link que apontar para fora do hub DEVE conter rigorosamente `target="_blank" rel="noopener noreferrer"`.
4. **MODAIS SOBREPOSTOS OBRIGATÓRIOS:** Conteúdos de rodapé ("Sobre o Projeto", "Termos de Uso", "Política de Privacidade") e avisos de status nunca devem redirecionar o usuário para outra página. Devem ser exibidos como gavetas/modais deslizantes na própria aplicação.
5. **GRID 5x3 NO DESKTOP:** Em resoluções a partir de 1024px, os cards dos 15 setores devem ser distribuídos em 5 linhas de 3 colunas. No mobile, devem colapsar verticalmente para 1 coluna fluida.
6. **PRESERVAÇÃO DO PWA:** Nenhuma alteração pode remover o manifesto PWA (`manifest.json`) ou inviabilizar o registro do Service Worker (`sw.js`).
7. **FIDELIDADE VISUAL FAMINAS:** As cores e tipografia oficiais (declaradas em `css/variables.css`) não podem ser alteradas arbitrariamente.

---

## 2. PROCESSO DE IMPLEMENTAÇÃO DE NOVAS FUNCIONALIDADES
Ao receber uma solicitação para implementar ou alterar algo no InfoHub FAMINAS, a IA deve seguir este ciclo:

1. **Consulta aos Artefatos:** Ler previamente [PROJECT_DNA.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/PROJECT_DNA.md) e [PRODUCT_BACKLOG.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/PRODUCT_BACKLOG.md).
2. **Separação de Responsabilidades:**
   * Alterações de conteúdo dos 15 setores -> Editar EXCLUSIVAMENTE `js/services-data.js`.
   * Alterações de estilo visual -> Editar os arquivos modulares em `/css` (`variables.css`, `base.css`, `cards.css`, `modais.css`).
   * Alterações de comportamento interativo -> Editar os módulos específicos em `/js` (`cards-renderer.js`, `modal-controller.js`, `pwa.js`).
3. **Preservação de Padrões Semânticos:** Usar tags HTML apropriadas (`<header>`, `<nav>`, `<main>`, `<article>`, `<dialog>`, `<footer>`). Não substituir botões acessíveis por `<div onclick="...">`.

---

## 3. PROCESSO DE TESTES E VALIDAÇÃO
Toda alteração deve ser validada executando verificações funcionais e técnicas:

1. **Validação de Renderização:**
   * Garantir que todos os 15 setores do Guia de Extensão estão presentes e renderizados.
   * Verificar se o grid 5x3 está ativo em viewport desktop (>= 1024px) e 1 coluna em mobile (375px / 414px).
2. **Validação de Modais:**
   * Testar a abertura dos modais de "Sobre o Projeto", "Termos de Uso" e "Política de Privacidade".
   * Testar o fechamento pelo botão de fechar, clique no fundo escuro (backdrop) e tecla `Escape`.
   * Testar o bloqueio de scroll da página (`body.modal-open`).
3. **Validação do Fallback de Indisponibilidade:**
   * Clicar em um card com `status: "coming_soon"` e certificar-se de que o modal de homologação abre, impedindo navegação para link quebrado, e que o botão de retorno fecha o modal com sucesso.
4. **Validação dos Links Oficiais Institucionais:**
   * Certificar-se de que o botão no cabeçalho direciona para `https://www.unifaminas.edu.br/principal` com rótulo institucional e layout responsivo.
   * Certificar-se de que o card no rodapé direciona para `https://www.unifaminas.edu.br/cursos/analise-e-desenvolvimento-de-sistemas`.
   * Ambos em nova aba com `rel="noopener noreferrer"`.
5. **Validação do Service Worker & PWA:**
   * Verificar se o Service Worker registra sem erros no console (`navigator.serviceWorker.register`).
   * Garantir que os arquivos essenciais estão listados no cache.
   * Garantir que o badge "Instalar App" no Hero aciona a instalação ou modal instrutivo.

---

## 4. PROCESSO DE REVISÃO DE CÓDIGO (CODE REVIEW)
Antes de concluir qualquer tarefa, audite o código gerado respondendo:

* Existe algum código acoplado ou lógica de negócio embutida diretamente no HTML em vez de módulos JS?
* Há dependência de CDN externa que possa quebrar sem internet (salvo Google Fonts)?
* A acessibilidade foi mantida (textos alternativos em imagens, contraste de cor adequado, elementos focáveis por teclado)?
* O arquivo `vercel.json` continua compatível com hospedagem estática pura?

---

## 5. PROCESSO DE DOCUMENTAÇÃO
* Se um novo setor for acrescentado ou as regras de negócio mudarem, o [PROJECT_DNA.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/PROJECT_DNA.md) e o [PRODUCT_BACKLOG.md](file:///c:/Users/Nilton/Workspaces/AG_Workspace/InfoHub-Faminas/PRODUCT_BACKLOG.md) DEVEM ser atualizados com a devida justificativa.
* O `README.md` da raiz do repositório deve manter instruções claras sobre como clonar, testar localmente e configurar os links dos grupos no arquivo `js/services-data.js`.

---

## 6. CHECKLIST DE CONCLUSÃO (DEFINITION OF DONE)
Uma tarefa só pode ser dada como concluída quando:

- [ ] Código escrito em HTML5 semântico, CSS3 puro e Vanilla JS moderno.
- [ ] 15 cards exibidos no padrão de grid 5x3 (desktop) e coluna única (mobile).
- [ ] Design alinhado às cores, logos e tipografia do EducaHub/FAMINAS.
- [ ] Atalho em destaque para o portal oficial `unifaminas.edu.br` presente no cabeçalho.
- [ ] Card de destaque para o curso de ADS no rodapé institucional.
- [ ] Modais de Sobre, Termos e Privacidade funcionais na própria tela.
- [ ] Fallback declarativo operacional para serviços em desenvolvimento.
- [ ] Service Worker e manifesto PWA validados sem erros de console.
- [ ] Compatibilidade total com deploy estático na Vercel garantida.
