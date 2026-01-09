// Service Worker for Portfolio Site
// Implements aggressive caching for images and static assets

const CACHE_NAME = "portfolio-cache-v1";
const STATIC_CACHE_NAME = "portfolio-static-v1";
const IMAGE_CACHE_NAME = "portfolio-images-v1";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/projects",
  "/about",
  "/contact",
  "/blog",
  "/manifest.json",
  "/icon.ico",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");

  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(IMAGE_CACHE_NAME),
      caches.open(CACHE_NAME),
    ])
  );

  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== CACHE_NAME &&
            cacheName !== STATIC_CACHE_NAME &&
            cacheName !== IMAGE_CACHE_NAME
          ) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Handle different types of requests
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Image requests - Cache first with fallback
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log("Image fetch failed:", error);
    // Return a placeholder or cached version if available
    return new Response("", { status: 408, statusText: "Request timeout" });
  }
}

// Static assets - Cache first with network fallback
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cachedResponse || new Response("", { status: 408 });
  }
}

// API requests - Network first with cache fallback
async function handleAPIRequest(request) {
  try {
    const response = await fetch(request);

    // Only cache successful GET requests
    if (response.ok && request.method === "GET") {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response("", { status: 408 });
  }
}

// Page requests - Network first with cache fallback
async function handlePageRequest(request) {
  try {
    const response = await fetch(request);

    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Fallback to offline page
    return cache.match("/") || new Response("Offline", { status: 503 });
  }
}

// Helper functions
function isImageRequest(request) {
  return (
    request.destination === "image" ||
    /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(
      new URL(request.url).pathname
    ) ||
    request.url.includes("imgix.net")
  );
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/static/") ||
    /\.(js|css|woff|woff2|ttf|eot)$/i.test(url.pathname)
  );
}

function isAPIRequest(request) {
  return new URL(request.url).pathname.startsWith("/api/");
}

// Background sync for analytics
self.addEventListener("sync", (event) => {
  if (event.tag === "analytics-sync") {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Implementation for offline analytics sync
  console.log("Syncing analytics data...");
}
