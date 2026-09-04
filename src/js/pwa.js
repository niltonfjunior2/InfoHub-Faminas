/**
 * Gerenciador de PWA (Progressive Web App) - InfoHub FAMINAS
 * Registro do Service Worker e controle do fluxo de instalação nativa.
 */

import { openModal } from './modal-controller.js';

let deferredInstallPrompt = null;

/**
 * Registra o Service Worker
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[InfoHub PWA] Service Worker registrado com escopo:', registration.scope);
        })
        .catch((error) => {
          console.warn('[InfoHub PWA] Falha ao registrar Service Worker:', error);
        });
    });
  }
}

/**
 * Configura o badge de instalação na seção hero
 */
function setupInstallPrompt() {
  const installBtn = document.getElementById('btn-install-pwa');
  if (!installBtn) return;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    console.log('[InfoHub PWA] Evento beforeinstallprompt capturado com sucesso.');
  });

  installBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choiceResult = await deferredInstallPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('[InfoHub PWA] Usuário aceitou a instalação do app.');
        installBtn.innerHTML = `
          <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
          <span>App Instalado</span>
        `;
        installBtn.classList.add('is-installed');
      }
      deferredInstallPrompt = null;
    } else {
      // Se já instalado ou navegador sem prompt automático (ex.: Safari iOS), abre o guia passo a passo
      openModal('pwa_instructions');
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('[InfoHub PWA] Aplicativo instalado com sucesso.');
    installBtn.innerHTML = `
      <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
      <span>App Instalado</span>
    `;
    installBtn.classList.add('is-installed');
    deferredInstallPrompt = null;
  });
}

/**
 * Inicializador do módulo PWA
 */
export function initPWA() {
  registerServiceWorker();
  setupInstallPrompt();
}
