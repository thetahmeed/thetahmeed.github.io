'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "c5942606b26dbb2f2c5c7098976c0c89",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "111428387fd5a9fa37b1d4705f55b05b",
"/": "6ce254003078d14a3e26e1ba01e76160",
"main.dart.js": "90e1c5a954ec2b82008e3bb68a64c87f",
"manifest.json": "f88e93ec142e1b908ab3dd4e4ef01a34",
"thetahmeed.github.io/.git/config": "69ad7399c796c679407ab8695755ce9f",
"thetahmeed.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"thetahmeed.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"thetahmeed.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"thetahmeed.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"thetahmeed.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"thetahmeed.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"thetahmeed.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"thetahmeed.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"thetahmeed.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"thetahmeed.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"thetahmeed.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"thetahmeed.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"thetahmeed.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"thetahmeed.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"thetahmeed.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"thetahmeed.github.io/.git/index": "abeef7767e0794d3bdabfc7c7f76b3bb",
"thetahmeed.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"thetahmeed.github.io/.git/logs/HEAD": "910a22c4f8ace06a9d70a22a5c4a604c",
"thetahmeed.github.io/.git/logs/refs/heads/main": "910a22c4f8ace06a9d70a22a5c4a604c",
"thetahmeed.github.io/.git/logs/refs/remotes/origin/HEAD": "910a22c4f8ace06a9d70a22a5c4a604c",
"thetahmeed.github.io/.git/objects/pack/pack-71fe0e947de8a5f898e3eda68cd1a44e234f7604.idx": "4418339875674e763835a5850ef0a6ff",
"thetahmeed.github.io/.git/objects/pack/pack-71fe0e947de8a5f898e3eda68cd1a44e234f7604.pack": "beef948ded95426e3c570683d43f8996",
"thetahmeed.github.io/.git/packed-refs": "717aa468bd90be77a76f91b4f744f49d",
"thetahmeed.github.io/.git/refs/heads/main": "fbbdc4a9d7070ebe1d3c78f1b87a367f",
"thetahmeed.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"thetahmeed.github.io/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"thetahmeed.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"thetahmeed.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"thetahmeed.github.io/assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"thetahmeed.github.io/assets/NOTICES": "89033889dffc47e2c9cd2cfe8e9cfb47",
"thetahmeed.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"thetahmeed.github.io/assets/shaders/ink_sparkle.frag": "9851c5ed1da0cd856f0a970c4ceae2ab",
"thetahmeed.github.io/canvaskit/canvaskit.js": "a3d1ab3b480820685788a51dee0f5a1a",
"thetahmeed.github.io/canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"thetahmeed.github.io/canvaskit/chromium/canvaskit.js": "5b0f87b32b67930ee337046957a02d46",
"thetahmeed.github.io/canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"thetahmeed.github.io/canvaskit/skwasm.js": "b726c23977ffcec25ad36cb84734e7ae",
"thetahmeed.github.io/canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"thetahmeed.github.io/canvaskit/skwasm.worker.js": "4ac8aa2a7e5d7b7ec96f9be2eb82d7ae",
"thetahmeed.github.io/favicon.png": "c5942606b26dbb2f2c5c7098976c0c89",
"thetahmeed.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"thetahmeed.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"thetahmeed.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"thetahmeed.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"thetahmeed.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"thetahmeed.github.io/index.html": "6ce254003078d14a3e26e1ba01e76160",
"thetahmeed.github.io/main.dart.js": "a4d3e42851a68c80fb2eda3528059406",
"thetahmeed.github.io/manifest.json": "f88e93ec142e1b908ab3dd4e4ef01a34",
"thetahmeed.github.io/version.json": "3887f70ceb787cc65b3cd3a859c5e1df",
"version.json": "3887f70ceb787cc65b3cd3a859c5e1df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
