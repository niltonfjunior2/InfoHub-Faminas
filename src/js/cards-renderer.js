/**
 * Motor de Renderização dos 15 Cards Setoriais - InfoHub FAMINAS
 * Distribuição em Grid 5x3 no desktop e 1 coluna no mobile.
 * Suporte a navegação externa e fallback declarativo para serviços em homologação.
 */

import { SERVICES_DATA } from './services-data.js';
import { openModal } from './modal-controller.js';

/**
 * Cria a representação HTML de um card de serviço
 */
function createCardElement(service) {
  const card = document.createElement('article');
  card.className = 'service-card';
  card.id = `card-service-${service.id}`;
  card.setAttribute('data-id', service.id);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Setor ${service.order}: ${service.title}. ${service.status === 'active' ? 'Clique para acessar página em nova janela.' : 'Serviço em homologação. Clique para ver detalhes.'}`);

  const formattedOrder = String(service.order).padStart(2, '0');
  const isActive = service.status === 'active' && service.url && service.url.trim() !== '';

  const statusHtml = isActive
    ? `<span class="card-status status-active" aria-label="Status: Disponível">Disponível</span>`
    : `<span class="card-status status-coming_soon" aria-label="Status: Em Homologação">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Em Homologação</span>
       </span>`;

  const actionHtml = isActive
    ? `<span class="card-action-link">
        <span>Acessar Guia</span>
        <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
       </span>`
    : `<span class="card-action-link">
        <span>Ver Status</span>
        <span class="material-symbols-outlined" aria-hidden="true">info</span>
       </span>`;

  card.innerHTML = `
    <div class="card-top">
      <div class="card-icon-wrapper" aria-hidden="true">
        <span class="material-symbols-outlined">${service.icon}</span>
      </div>
      <span class="card-order-badge" aria-hidden="true">#${formattedOrder}</span>
    </div>
    
    <div class="card-body">
      <h3 class="card-title">${service.title}</h3>
      <p class="card-description">${service.description}</p>
    </div>

    <div class="card-footer">
      ${statusHtml}
      ${actionHtml}
    </div>
  `;

  // Função de ativação do card
  const handleCardActivation = () => {
    if (isActive) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    } else {
      openModal('unavailable', service);
    }
  };

  // Evento de clique
  card.addEventListener('click', handleCardActivation);

  // Acessibilidade via teclado (Enter ou Barra de Espaço)
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardActivation();
    }
  });

  return card;
}

/**
 * Inicializa a renderização dos 15 cards no container do grid
 */
export function initCardsRenderer() {
  const gridContainer = document.getElementById('services-grid');
  if (!gridContainer) {
    console.warn('[InfoHub FAMINAS] Contêiner #services-grid não encontrado.');
    return;
  }

  gridContainer.innerHTML = '';

  SERVICES_DATA.forEach((service) => {
    const cardElement = createCardElement(service);
    gridContainer.appendChild(cardElement);
  });

  console.log(`[InfoHub FAMINAS] ${SERVICES_DATA.length} cards setoriais renderizados com sucesso.`);
}
