const CACHE = 'forma-v20260919-1';
const SHELL = [
  './','./index.html','./styles.css?v=20260919-1','./app.js?v=20260919-1','./manifest.webmanifest?v=20260919-1',
  './assets/app-icon.svg','./assets/app-icon-180.png','./assets/app-icon-512.png',
  './assets/equipment/chest-press.jpg','./assets/equipment/incline-bench.jpg','./assets/equipment/pec-deck.jpg','./assets/equipment/lateral-raise.png','./assets/equipment/cable-column.jpg','./assets/equipment/ab-crunch.png','./assets/equipment/lat-row.jpg','./assets/equipment/chest-supported-row.png','./assets/equipment/biceps-curl.jpg','./assets/equipment/dumbbells.jpg','./assets/equipment/leg-press.png','./assets/equipment/leg-extension.jpg','./assets/equipment/leg-curl.jpg','./assets/equipment/calf-raise.png','./assets/equipment/knee-raise.jpg','./assets/equipment/treadmill.jpg','./assets/equipment/exercise-bike.jpg','./assets/equipment/elliptical.jpg'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 if(event.request.mode==='navigate')event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));return response}).catch(()=>caches.match('./index.html')));
 else event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok&&new URL(event.request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response})));
});
