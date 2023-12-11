'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7b339cb97f10d67842fc55a987556c1",
"index.html": "1fc86b49c52fbac40322ef475b5150e1",
"/": "1fc86b49c52fbac40322ef475b5150e1",
"main.dart.js": "7d09fee2c03c8d6b2e3f62c5a2824c42",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3f5cfc0e60fd8790ab2e84f2a240c84b",
".git/config": "f2d92d0d7160a6994950f2b3a0fd93d3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/a50dc908c1ba7c51cf6ebdf014c6649e2c9bd1": "6cda49fb7843ace1cfb491571dedfb4d",
".git/objects/93/7a486785c702ca1f22cc55570013c380d88f0c": "2df747588864d2ad217bd423f28c440b",
".git/objects/94/084ec97a9ff0417cc5a0703234104b69a55bfd": "39aabe2bf0134a8236e79e958f585c17",
".git/objects/0e/0bfc1540cd13e29e83091397d73d71359205ed": "98b27e73ca67c7399de03ab603e09c06",
".git/objects/d9/8592a17c5a70dcb2b6bb0b6dfe5ffca36680ba": "d30438da6d1115cd5d37f0f48b6e5f8b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/ec8248ec658692c7137815ea3ac4e559641be3": "89dcacdbffe915336e137e41f664580e",
".git/objects/df/7d77682896e963c7ca0edca5c568c6872da24b": "63eb6bedd606640a391787ce0e1a2bf5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/713ae13a08d45d05ffd2989af0a0358f5b9035": "2ef00598c9277e973839d0b7915e061f",
".git/objects/bd/e14500222a330a1d0b6f9530b7cfb9216b4ca4": "847cade93f02eeef2ae89691b8b3b54a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b55c4408e4433601f4bdbbde5b6d2b7f744569": "724231ea17cfb0ab02e1a1cb66b4e24a",
".git/objects/e5/6eaca3410d9f68a286a4c101bdebad676be8e5": "16988d9004e65731b4deb240799185b8",
".git/objects/e2/e296a86f7cfa4685ef4cf0987f738395cc5dc5": "d813da686cd0dffd34a0eb5a80679894",
".git/objects/f3/8d5d47997a597f7aa95e93319117dfac57ac9f": "47078e29651bfd7188f223879a2b49df",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/ca19d54d10367e0b82bf91e36f08ee3f996711": "af2226c584b9dae2b334aaeacfb25868",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/56df1601e2d55c07fbae742227a36e0b558598": "e3e3fbc84a38e5a86a6f9ca632eab884",
".git/objects/e4/0e1e2d26daf88f31ea48cb4a579445f14701c5": "a69c96477905325ed99790466a6a67b6",
".git/objects/c8/3bf1639f8b8a47a121807ecc956787b3b05975": "8bd14668e5a2139d0622d30a3d77a1a2",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/20/8c04f4889dcc1eedd04834dc8d0a465a484dd3": "ed4bbad2b08d71e2d6fa67fbee917a33",
".git/objects/16/9c4b07c855d2852797fb88cab9de3afd504b21": "d13013149d3924a6808a8cec513f02dc",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/6f9585b406ba4894887f286f7d1c2cabc0e5e1": "c60097c95f2563ee5e1ff1fc06ebb394",
".git/objects/75/0d9c4ec7f15edfc7c574ffe5deeb24cd2e4f92": "6e9559682cef14c55c3cb417855f191b",
".git/objects/43/b0b6a7c928d54211056e43f87a0955a1475c2c": "22e63591615387519435dd2ef89ced8c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/422c2fd2f3199588f8218f8f5c2e04b44787d4": "8ef482b7d29381e83cbd7b04e3cb8d03",
".git/objects/9a/6059c4e06f578c0374405ac961a33f11e31f33": "f5a1e8b37ccaf9b40afcab1fb17eb1ca",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/d52a59b5c03a67f7452a781bbcc964f53e3f7d": "70f924c016e9cda362ee7cceb2c8d89f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b6/71030f32e24734a1b371d251fb9104b597da55": "22e14026f9676d2951d20f8d82253da2",
".git/objects/a9/379e4cc30914a2d775c4dfba2d7af527640602": "3024c623dc9f58d59f77f95d6b98fa95",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/14fcb114b57d1525d678009b8dcae21bfc728b": "8b34c6d86717a4f59d7b6b7c4efcf05e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/cb/e4ab4105bbb869c354a2fe8a8d5570f6848e54": "18da3441b1510c24b5ef01f86f105d7d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/547181af0f2c19737eaf4d30e434a0d0cb7933": "b9f4172a770c31b93d07b58b9894162d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/f9423dff3089e1b9810c3ace7c50cb60392bc7": "13ceac3d93c78f8e58723f1a13c9e403",
".git/objects/84/cad812fc7bf500284a187e50ce47876b7bff13": "f384c30953bcc9b8c557f8199876af6b",
".git/objects/47/4927eae227a8a634a615e12539ea79b5e7cc5d": "b4f721d944aa666a4c8d61c546845368",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86382444363e61d34ef77534a8d0660a",
".git/logs/refs/heads/main": "566e05a9938bb051e63cfe3f199f3f36",
".git/logs/refs/remotes/origin/main": "b657049f5e985a0cd1b3b6f878d93160",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ce1545a892c520c3a110ed5c67ada322",
".git/refs/remotes/origin/main": "ce1545a892c520c3a110ed5c67ada322",
".git/index": "5366434aaaaef31ac601866e54dce5b9",
".git/COMMIT_EDITMSG": "edaceaffeb957f5baa220236ddf37f43",
"assets/AssetManifest.json": "b49876ee08e759d9e32598654dde15ac",
"assets/NOTICES": "5c65d219b301a3cb0dc23c5083aa6964",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "497729408a8a161066c0a744d565e2d3",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/audio/done.mp3": "91a0ab28b01e02ad2069e24403229bc9",
"assets/assets/audio/ready.mp3": "7b803d1895eda769e70c8b0e0054d954",
"git": "c2dddcf0e3b1b9460fe91fe93826d68a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
