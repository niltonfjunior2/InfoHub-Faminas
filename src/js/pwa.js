/**
 * Gerenciador de PWA (Progressive Web App) - InfoHub FAMINAS
 * Registro do Service Worker e controle do fluxo de instalação nativa.
 */

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
 * Configura o botão de instalação nativa
 */
function setupInstallPrompt() {
  const installBtn = document.getElementById('btn-install-pwa');

  window.addEventListener('beforeinstallprompt', (event) => {
    // Impede a barra padrão do Chrome em mobile para usar nosso botão institucional
    event.preventDefault();
    deferredInstallPrompt = event;

    if (installBtn) {
      installBtn.style.display = 'inline-flex';
      installBtn.setAttribute('aria-hidden', 'false');

      installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;

        deferredInstallPrompt.prompt();
        const choiceResult = await deferredInstallPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
          console.log('[InfoHub PWA] Usuário aceitou a instalação do app.');
        } else {
          console.log('[InfoHub PWA] Usuário recusou a instalação.');
        }

        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
        installBtn.setAttribute('aria-hidden', 'true');
      });
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('[InfoHub PWA] Aplicativo instalado com sucesso.');
    if (installBtn) {
      installBtn.style.display = 'none';
      installBtn.setAttribute('aria-hidden', 'true');
    }
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
