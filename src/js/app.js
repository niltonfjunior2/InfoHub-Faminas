/**
 * Ponto de Entrada Principal - InfoHub FAMINAS (Stub de Estruturação)
 */
import { initCardsRenderer } from './cards-renderer.js';
import { initModalController } from './modal-controller.js';
import { initPWA } from './pwa.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[InfoHub FAMINAS] Inicializando aplicação...');
  initCardsRenderer();
  initModalController();
  initPWA();
});
