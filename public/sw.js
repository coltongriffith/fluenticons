// The previous version of the site installed a Workbox service worker at this
// URL. This replacement clears its caches and unregisters itself so returning
// visitors always get the live site straight from the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
    })()
  );
});
