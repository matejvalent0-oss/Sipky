const C="sipky-v1";
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const u=e.request.url;
 e.respondWith(
  fetch(u,{cache:"no-cache"})
   .then(r=>{if(r.ok){const k=r.clone();caches.open(C).then(c=>c.put(u,k))}return r})
   .catch(()=>caches.match(u).then(r=>r||caches.match(self.registration.scope)))
 );
});
