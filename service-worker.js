const staticAssets = [
  './',
  './index.html',
  './styles.css', // Eventuale file CSS
  './produzione.html',
  './vendite.html',
  './acquisti.html',
  './marketing.html',
  './manifest.json',
  'https://exwhy.it/Xylogo.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open('exwhy-static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
