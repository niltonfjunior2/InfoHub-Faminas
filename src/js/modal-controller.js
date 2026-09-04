/**
 * Controlador de Modais e Drawers Sobrepostos - InfoHub FAMINAS
 * Suporte a acessibilidade, tecla Escape, clique no backdrop e bloqueio de scroll.
 */

const MODAL_TEMPLATES = {
  sobre: {
    title: 'Sobre o Projeto de Extensão',
    icon: 'school',
    body: `
      <h3>InfoHub FAMINAS: Engenharia de Software Aplicada à Comunidade</h3>
      <p>
        O <strong>InfoHub FAMINAS</strong> é uma iniciativa extensionista curricularizada desenvolvida pelos estudantes do curso de <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> da <strong>FAMINAS</strong>, no âmbito da disciplina de <strong>Engenharia de Software</strong>.
      </p>
      
      <div class="modal-highlight-box">
        <strong>O Desafio Real:</strong> Mapear dores reais da comunidade acadêmica, entrevistar gestores setoriais, elicitar e modelar requisitos com rigor formal e entregar protótipos funcionais de autoatendimento.
      </div>

      <h3>Competências Desenvolvidas</h3>
      <ul>
        <li><strong>Engenharia de Requisitos:</strong> Elicitação empírica com discentes e mapeamento de processos oficiais com gestores.</li>
        <li><strong>Modelagem Ágil & BDD:</strong> Escrita formal de Histórias de Usuário (User Stories), Matrizes de Regras de Negócio e critérios de aceitação em sintaxe BDD (Dado-Quando-Então).</li>
        <li><strong>Prototipação Web Standards:</strong> Desenvolvimento em HTML5 semântico, CSS3 responsivo (Mobile-First) e JavaScript puro.</li>
        <li><strong>Extensão Universitária:</strong> Prestação de serviços reais, escuta ativa e diálogo direto com a comunidade e os setores institucionais.</li>
      </ul>

      <h3>Os 15 Setores Atendidos</h3>
      <p>
        Cada equipe de estudantes assumiu a responsabilidade de um tema institucional prioritário, cobrindo desde credenciais de acesso, estágios, clínicas-escola, dependências até TCC e colação de grau, promovendo autonomia informacional para toda a FAMINAS.
      </p>
    `
  },
  termos: {
    title: 'Termos de Uso Institucionais',
    icon: 'gavel',
    body: `
      <h3>Finalidade e Escopo</h3>
      <p>
        Este portal tem caráter estritamente institucional, educacional e informativo. Seu objetivo é simplificar a orientação de processos internos e fornecer autoatendimento ágil para estudantes, colaboradores e comunidade acadêmica da FAMINAS.
      </p>

      <h3>Natureza dos Protótipos Acadêmicos</h3>
      <p>
        As páginas setoriais vinculadas a este hub foram desenvolvidas por estudantes sob supervisão docente e passam por validação/homologação junto aos gestores de cada setor. As informações aqui disponibilizadas visam orientar o fluxo correto dos serviços acadêmicos.
      </p>

      <div class="modal-highlight-box">
        <strong>Normativas Oficiais:</strong> Os prazos, taxas, calendários e portarias oficiais da FAMINAS prevalecem sempre sobre quaisquer resumos ou fluxos informativos. Para solicitações formais de documentos com validade jurídica, utilize os canais da Secretaria Geral e do Portal Acadêmico oficial.
      </div>

      <h3>Uso Aceitável</h3>
      <p>
        É vedada a reprodução indevida ou modificação não autorizada dos conteúdos para fins escusos. O código e os protótipos integram o acervo de extensão e inovação pedagógica do curso de ADS da FAMINAS.
      </p>
    `
  },
  privacidade: {
    title: 'Política de Privacidade e LGPD',
    icon: 'security',
    body: `
      <h3>Compromisso com a Privacidade (LGPD)</h3>
      <p>
        O <strong>InfoHub FAMINAS</strong> atua em estrita conformidade com as diretrizes da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e com as políticas institucionais de governança de dados da FAMINAS.
      </p>

      <div class="modal-highlight-box">
        <strong>Hub Estático e Não Rastreador:</strong> Este hub é uma aplicação web estática. <strong>NÃO</strong> realizamos coleta de dados cadastrais, <strong>NÃO</strong> solicitamos nem armazenamos senhas de acesso e <strong>NÃO</strong> utilizamos cookies para rastreamento de perfil comportamental ou publicidade.
      </div>

      <h3>Links Externos e Segurança</h3>
      <p>
        Ao navegar para as páginas específicas dos setores ou para o portal institucional oficial da FAMINAS, a navegação ocorre em novas janelas com isolamento de segurança (<code>rel="noopener noreferrer"</code>). Os canais externos de autoatendimento podem possuir formulários próprios que respeitam as políticas de custódia de dados de seus respectivos setores.
      </p>

      <h3>Contato Institucional</h3>
      <p>
        Dúvidas sobre o tratamento de dados institucionais na FAMINAS podem ser direcionadas aos canais oficiais da instituição ou à coordenação do curso de Análise e Desenvolvimento de Sistemas.
      </p>
    `
  },
  pwa_instructions: {
    title: 'Instalação do InfoHub FAMINAS',
    icon: 'install_mobile',
    body: `
      <h3>Tenha o InfoHub sempre à mão no seu aparelho</h3>
      <p>
        O <strong>InfoHub FAMINAS</strong> é um aplicativo web progressivo (PWA) e pode ser adicionado à tela inicial do seu celular ou computador sem ocupar espaço da memória e com carregamento instantâneo.
      </p>

      <div class="modal-highlight-box">
        <strong>No Smartphone Android (Google Chrome):</strong><br>
        Toque no menu de três pontos (⋮) no canto superior direito do navegador e selecione a opção <em>"Instalar aplicativo"</em> ou <em>"Adicionar à tela inicial"</em>.
      </div>

      <div class="modal-highlight-box">
        <strong>No iPhone / iPad (Safari iOS):</strong><br>
        Toque no ícone de compartilhamento (quadrado com seta apontando para cima) na barra inferior e selecione <em>"Adicionar à Tela de Início"</em>.
      </div>

      <div class="modal-highlight-box">
        <strong>No Computador (Chrome / Edge):</strong><br>
        Clique no ícone de instalação localizado na barra de endereços (ao lado do botão de favoritos) e confirme em <em>"Instalar"</em>.
      </div>
    `
  }
};

let currentActiveModal = null;

/**
 * Cria a estrutura DOM de um modal institucional
 */
function createModalElement(modalId, title, icon, contentHtml, returnButtonText = 'Fechar') {
  const dialog = document.createElement('div');
  dialog.className = 'modal-dialog';
  dialog.id = `modal-instance-${modalId}`;
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', `modal-title-${modalId}`);

  dialog.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-wrapper">
        <div class="modal-header-icon" aria-hidden="true">
          <span class="material-symbols-outlined">${icon}</span>
        </div>
        <h2 id="modal-title-${modalId}" class="modal-title">${title}</h2>
      </div>
      <button type="button" class="modal-close-btn" aria-label="Fechar modal" data-action="close">
        <span class="material-symbols-outlined" aria-hidden="true">close</span>
      </button>
    </div>
    <div class="modal-body">
      ${contentHtml}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-modal-return" data-action="close">
        <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        <span>${returnButtonText}</span>
      </button>
    </div>
  `;

  return dialog;
}

/**
 * Abre um modal institucional pelo ID
 */
export function openModal(modalKey, customData = null) {
  const modalsRoot = document.getElementById('modals-root');
  if (!modalsRoot) return;

  // Garante que o backdrop existe
  let backdrop = document.getElementById('modal-backdrop-global');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'modal-backdrop-global';
    backdrop.className = 'modal-backdrop';
    backdrop.addEventListener('click', closeModal);
    document.body.appendChild(backdrop);
  }

  // Limpa modais anteriores
  modalsRoot.innerHTML = '';

  let modalElement;

  if (modalKey === 'unavailable') {
    const serviceName = customData?.title || 'Serviço Setorial';
    const sectorGroup = customData?.sectorGroup || 'Equipe Discente';
    const content = `
      <div class="modal-alert-box">
        <strong>Status: Em Homologação Pedagógica (${sectorGroup})</strong>
      </div>
      <p>
        A página informacional do setor <strong>${serviceName}</strong> está atualmente em fase de validação e alinhamento institucional junto ao gestor responsável e aos estudantes de ADS.
      </p>
      <p>
        Assim que o protótipo concluir os testes de usabilidade e requisitos da etapa curricular, o link de autoatendimento será ativado neste mesmo card.
      </p>
      <div class="modal-highlight-box">
        Para dúvidas urgentes deste setor, recomendamos o atendimento presencial no campus ou através do portal institucional oficial da FAMINAS.
      </div>
    `;
    modalElement = createModalElement('unavailable', `${serviceName}`, 'pending_actions', content, 'Retornar à página principal');
  } else if (MODAL_TEMPLATES[modalKey]) {
    const template = MODAL_TEMPLATES[modalKey];
    modalElement = createModalElement(modalKey, template.title, template.icon, template.body, 'Retornar à página principal');
  } else {
    return;
  }

  modalsRoot.appendChild(modalElement);

  // Ativa backdrop e diálogo
  document.body.classList.add('modal-open');
  backdrop.classList.add('is-active');

  // Força reflow para transição suave
  void modalElement.offsetWidth;
  modalElement.classList.add('is-active');

  // Adiciona listeners para os botões de fechar
  modalElement.querySelectorAll('[data-action="close"]').forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  currentActiveModal = modalElement;

  // Foco no botão de retorno para acessibilidade
  const focusBtn = modalElement.querySelector('.btn-modal-return');
  if (focusBtn) {
    focusBtn.focus();
  }
}

/**
 * Fecha o modal ativo
 */
export function closeModal() {
  const backdrop = document.getElementById('modal-backdrop-global');
  if (backdrop) {
    backdrop.classList.remove('is-active');
  }

  if (currentActiveModal) {
    currentActiveModal.classList.remove('is-active');
  }

  document.body.classList.remove('modal-open');

  setTimeout(() => {
    const modalsRoot = document.getElementById('modals-root');
    if (modalsRoot) modalsRoot.innerHTML = '';
    currentActiveModal = null;
  }, 250);
}

/**
 * Inicializa os gatilhos de modal do rodapé e tecla Escape
 */
export function initModalController() {
  // Listener global para a tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && currentActiveModal) {
      closeModal();
    }
  });

  // Gatilhos presentes no rodapé
  const footerButtons = document.querySelectorAll('.footer-link-btn[data-modal]');
  footerButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      if (modalKey) {
        openModal(modalKey);
      }
    });
  });

  console.log('[InfoHub FAMINAS] Controlador de Modais inicializado.');
}
