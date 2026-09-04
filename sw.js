/**
 * Service Worker — InfoHub FAMINAS
 * Estratégia de Cache: Stale-While-Revalidate para recursos estáticos e Network-First para navegação.
 */

const CACHE_NAME = 'infohub-faminas-v1.0.0';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/css/variables.css',
  '/src/css/base.css',
  '/src/css/layout.css',
  '/src/css/cards.css',
  '/src/css/modais.css',
  '/src/js/app.js',
  '/src/js/services-data.js',
  '/src/js/cards-renderer.js',
  '/src/js/modal-controller.js',
  '/src/js/pwa.js',
  '/assets/images/logo-faminas.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/icon-faminas.svg'
];

// Instalação: armazena os ativos essenciais no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.error('[SW InfoHub] Erro no pré-cacheamento de ativos:', error);
      })
  );
});

// Ativação: limpa versões anteriores do cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW InfoHub] Removendo cache legado:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignora métodos que não sejam GET
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // Não intercepta chamadas para outros domínios (unifaminas.edu.br, github.io dos alunos)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Requisições de navegação (HTML): Network-first com fallback para index.html em cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          return caches.match('/index.html') || caches.match('/');
        })
    );
    return;
  }

  // Recursos estáticos (CSS, JS, Imagens, Fontes locais): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch((err) => {
          // Falha de rede em segundo plano (em offline, retorna o cache sem erro)
          return err;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
