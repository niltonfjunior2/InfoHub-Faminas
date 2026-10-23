/**
 * Controlador de Modais Sobrepostos - Template Setorial FAMINAS
 * ATENÇÃO ESTUDANTES: Este arquivo preserva os conteúdos institucionais e
 * as diretrizes de ética, LGPD e governança de IA. Não remova estas definições.
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
        <li><strong>Modelagem Ágil & BDD:</strong> Escrita formal de Histórias de Usuário (User Stories), Matrizes de Regras de Negócio e critérios de aceitação em sintaxe BDD.</li>
        <li><strong>Prototipação Web Standards:</strong> Desenvolvimento em HTML5 semântico, CSS3 responsivo (Mobile-First) e JavaScript puro.</li>
        <li><strong>Extensão Universitária:</strong> Prestação de serviços reais, escuta ativa e diálogo direto com a comunidade e os setores institucionais.</li>
      </ul>

      <h3>Os 15 Setores Atendidos</h3>
      <p>
        Cada equipe de estudantes assumiu a responsabilidade de um tema institucional prioritário, cobrindo desde credenciais de acesso, estágios, clínicas-escola, dependências até TCC e colação de grau, promovendo autonomia informacional para toda a FAMINAS.
      </p>

      <h3>Transparência e Uso de Inteligência Artificial</h3>
      <p>
        Em compromisso com a integridade acadêmica e as boas práticas de engenharia de software, declara-se que ferramentas de <strong>Inteligência Artificial (IA) Generativa</strong> foram empregadas no processo de desenvolvimento como tecnologia assistiva (apoio na prototipação, estruturação de código Web Standards, parametrização de testes e documentação).
      </p>
      <div class="modal-highlight-box">
        <strong>Supervisão Humana:</strong> Toda a concepção arquitetural, elicitação e validação de requisitos, curadoria de informações oficiais e decisões técnicas foram realizadas e validadas integralmente pelos estudantes e professores orientadores do curso de ADS da FAMINAS.
      </div>
    `,
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
        O usuário compromete-se a utilizar as informações deste portal de maneira ética, abstendo-se de tentar comprometer a segurança, disponibilidade ou integridade das plataformas da instituição.
      </p>
    `,
  },
  privacidade: {
    title: 'Política de Privacidade e LGPD',
    icon: 'security',
    body: `
      <h3>Compromisso com a Privacidade (LGPD)</h3>
      <p>
        O InfoHub FAMINAS e suas páginas setoriais foram concebidos sob o princípio de <em>Privacy by Design</em>, respeitando integralmente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
      </p>

      <div class="modal-highlight-box">
        <strong>Zero Coleta de Dados Pessoais Sensíveis:</strong> Este portal de autoatendimento não coleta dados bancários, documentos de identificação ou dados pessoais sensíveis para navegação e consulta de procedimentos.
      </div>

      <h3>Transparência e Telemetria</h3>
      <p>
        Podem ser coletados exclusivamente dados técnicos anônimos de desempenho (tais como tempo de carregamento e tipo de dispositivo) unicamente para fins de otimização contínua da experiência de uso do estudante.
      </p>

      <h3>Canais Oficiais do DPO</h3>
      <p>
        Para esclarecimentos formais sobre o tratamento de dados pessoais no âmbito da FAMINAS, consulte o Encarregado pelo Tratamento de Dados Pessoais (DPO) através dos canais institucionais no portal oficial da FAMINAS.
      </p>
    `,
  },
};

export function initModalController() {
  const modalsRoot = document.getElementById('modals-root');
  if (!modalsRoot) return;

  // Escuta cliques nos botões do rodapé
  document.querySelectorAll('[data-modal]').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalType = button.getAttribute('data-modal');
      openModal(modalType);
    });
  });

  // Fechamento via Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeActiveModal();
    }
  });

  function openModal(modalType) {
    const template = MODAL_TEMPLATES[modalType];
    if (!template) return;

    modalsRoot.innerHTML = `
      <div class="modal-backdrop is-active" id="modal-backdrop" aria-hidden="true"></div>
      <div class="modal-dialog is-active" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header class="modal-header">
          <div class="modal-title-wrapper">
            <span class="modal-header-icon" aria-hidden="true">
              <span class="material-symbols-outlined">${template.icon}</span>
            </span>
            <h2 id="modal-title" class="modal-title">${template.title}</h2>
          </div>
          <button type="button" class="modal-close-btn" id="modal-btn-close" aria-label="Fechar janela">
            <span class="material-symbols-outlined">close</span>
          </button>
        </header>
        <div class="modal-body">
          ${template.body}
        </div>
        <footer class="modal-footer">
          <button type="button" class="btn btn-primary-highlight" id="modal-btn-ok">
            Entendido
          </button>
        </footer>
      </div>
    `;

    document.body.classList.add('modal-open');

    // Eventos de fechamento
    document.getElementById('modal-btn-close')?.addEventListener('click', closeActiveModal);
    document.getElementById('modal-btn-ok')?.addEventListener('click', closeActiveModal);
    document.getElementById('modal-backdrop')?.addEventListener('click', closeActiveModal);
  }

  function closeActiveModal() {
    modalsRoot.innerHTML = '';
    document.body.classList.remove('modal-open');
  }
}
