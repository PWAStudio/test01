const cache_name = "app_cache-v1";
const cache_files_list = [
  "/",
  "index.html",
  "./logo.png",
  "./style.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cache_name).then(cache => {
      return cache.addAll(cache_files_list);
    })
  );
});

self.addEventListener("fetch", e => {
  //console.log(`intercepting fetch Request for: ${e.request.url}`);

  e.respondWith(caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );

});