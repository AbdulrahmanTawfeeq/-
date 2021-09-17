// const staticCacheName = "site.static-v5";
// const assets = [
//   "/",
//   "/index.html",
//   "/images/72x72.png",
//   "/images/96x96.png",
//   "/images/128x128.png",
//   "/images/144x144.png",
//   "/images/152x152.png",
//   "/images/192x192.png",
//   "/images/384x384.png",
//   "/images/512x512.png",
// ];
// self.addEventListener("install", (evt) => {
//   evt.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       console.log("cashing is here..");
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("activate", (evt) => {
//   evt.waitUntil(
//     caches.keys().then((keys) => {
//       return Promise.all(
//         keys
//           .filter((key) => key !== staticCacheName)
//           .map((key) => caches.delete(key))
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (evt) => {
//   evt.respondWith(
//     caches
//       .match(evt.request)
//       .then((cacheRes) => {
//         return cacheRes || fetch(evt.request);
//       })
//       .catch(() => {
//         caches.match("/index.html");
//       })
//   );
// });
