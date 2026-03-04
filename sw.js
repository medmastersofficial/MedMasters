const CACHE_NAME = 'medmasters-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];
const DATA_ASSETS = [
  '/data/anatomy.js',
  '/data/physio.js',
  '/data/biochem.js',
  '/data/pharma.js',
  '/data/patho.js',
  '/data/micro.js',
  '/data/community.js',
  '/data/behavioral.js',
];

// Install — cache static assets immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for data files, network-first for everything else
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Cache-first strategy for MCQ data files (they don't change often)
  if (url.pathname.startsWith('/data/')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Network-first for HTML/API calls
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok && event.request.method === 'GET') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
