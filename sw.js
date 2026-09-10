// HR Numbers v1.1 — service worker intentionally minimal while testing.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
