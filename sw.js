/* minimal service worker: lets the phone install the game as a full-screen app; no caching, always fresh */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
