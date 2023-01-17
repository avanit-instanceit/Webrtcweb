'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1fbc9a54b56fc2ba33b2841e12e5875a",
"index.html": "b76335dc0a0c8602ae27e432a42c5a81",
"/": "b76335dc0a0c8602ae27e432a42c5a81",
"speechrecognition.js": "da94096963ca17769ff4397b35c1a0e2",
"face-api.min.js": "b9fa3888f6ded30c7d01a8f1ed153310",
"main.dart.js": "63d512ddb8d8792933e1663662fdae51",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"facerecognition.js": "47ebdcfb2b5b22553709e3f3fed097b6",
"models/face_landmark_68_tiny_model-shard1": "47047fee26557b55d985952bdfc6cba1",
"models/face_recognition_model-shard2": "f2091ed03625f6e164a637c2326691c1",
"models/face_landmark_68_model-weights_manifest.json": "1d4029763003335bc6921aadeb58706a",
"models/face_landmark_68_model-shard1": "124304f06e07fcf928290ff776e96141",
"models/mtcnn_model-shard1": "846e8dd4e6a7ed12a2c749324adf0e11",
"models/tiny_face_detector_model-weights_manifest.json": "5bab50532388f5da9b4cd85b15adc11c",
"models/ssd_mobilenetv1_model-shard1": "37ef238973ea93daac91f1914478c40b",
"models/age_gender_model-weights_manifest.json": "d443abfd550a910c026d40cad6ea6000",
"models/face_expression_model-weights_manifest.json": "1eee5a2eea5ea5652904a2af88333dc1",
"models/ssd_mobilenetv1_model-weights_manifest.json": "cd2d65ec62107ba72b8b8d5047011647",
"models/face_recognition_model-shard1": "cb6f0f62e7598d70acf76483185a962b",
"models/face_landmark_68_tiny_model-weights_manifest.json": "29ea9c5c0e59a3069f8999b4ba1bd173",
"models/tiny_face_detector_model-shard1": "2e48b20953b0c59df47459d0319843a0",
"models/age_gender_model-shard1": "c34648b1f6dcf740eedef0473f13f4e1",
"models/ssd_mobilenetv1_model-shard2": "b6d5e81e2506145360be5c4278067080",
"models/face_recognition_model-weights_manifest.json": "6ecdaf3ea10d4fd3792e485f971e8b96",
"models/mtcnn_model-weights_manifest.json": "781bd744a5399d7cb0516d2a59a7c1c0",
"models/face_expression_model-shard1": "33ec63fec9fc41801930d44f4f4ea8f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"audio/detectionaudio.mp3": "b7a90e98471df475647e30b4c1b3b4b0",
"logo.png": "e3003c9b45351f23c06d2516d4780a20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d28fbc4a95fc93b7608e7b791f5fb1f4",
"audioplayer.js": "9788ab3e13c156f233459be997d440b8",
"assets/AssetManifest.json": "16230d63d81add403bb99eac0095ac54",
"assets/NOTICES": "70c629e8d6c46c09e063a8f84d02c642",
"assets/FontManifest.json": "5c955cb0c277fca7c52c51c033270fb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/neon/lib/fonts/LasEnter/LasEnter.ttf": "c161024b53fd9d99a60fa0ebc0a587fb",
"assets/packages/neon/lib/fonts/Samarin/Samarin.ttf": "e86112fa7734f71b0292102dfb322181",
"assets/packages/neon/lib/fonts/Beon/Beon.otf": "725bc066722fdfc327f582568e8ce97e",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Regular.ttf": "2f52ea89848cc22583a19a3517387465",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Bold.ttf": "c06f06e0a1b9e7bdb9ece19e455ae9cb",
"assets/packages/neon/lib/fonts/Automania/Automania.ttf": "3baf3e2ca3c97dc06fcd1332b7fa0d73",
"assets/packages/neon/lib/fonts/TextMeOne/TextMeOne-Regular.ttf": "475b539094d914ff68e420b4571c96c3",
"assets/packages/neon/lib/fonts/Cyberpunk/Cyberpunk.ttf": "9deb7d5fae2c035eb8b7d35f62169309",
"assets/packages/neon/lib/fonts/Monoton/Monoton-Regular.ttf": "f6aa15866bffca161454d7554a004259",
"assets/packages/neon/lib/fonts/Membra/Membra.ttf": "e378d80f5875e9095843e141e283897e",
"assets/shaders/ink_sparkle.frag": "bc40ab9d5d8cdf50db3f511ae0691b72",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/flag/us.png": "a836510e7026204ffe6d2d8e7659fa6c",
"assets/assets/flag/spanish.png": "71b6a2ca4054a8a282ffb543a5d076ce",
"assets/assets/Kiosys.gif": "7d484fc379afbc27e41f96e33452d39e",
"assets/assets/images/login_bg.png": "17d2dac09fae099565d49ef42ee0c1c5",
"assets/assets/loading.gif": "522618121f93ac633b7d484ec990160a",
"assets/assets/Error.png": "02b2f485d04316ba25364433323362ed",
"assets/assets/logo.png": "40dd97839a674699de383755ee651cda",
"assets/assets/logo2.png": "e3003c9b45351f23c06d2516d4780a20",
"assets/assets/forbidden.png": "5d06a6dec90c98519ad2012fd16cf984",
"assets/assets/setting/recordmic.png": "dc0b5e4c8eece3211398a782bc9dfc74",
"assets/assets/setting/subtitles.png": "fe86b34e8485350460992ba677b26e5b",
"assets/assets/setting/voicetype.png": "b67cd37a6a9afa6ec2f80457d8d00eb3",
"assets/assets/setting/male.png": "d97a54637e5529939c395bd29e53b6e6",
"assets/assets/setting/testaudio.mp3": "b2f2c14cbbbaa49783cd2f9a81b71f92",
"assets/assets/setting/female.png": "436eab85010315b4fb31c208780fce62",
"assets/assets/setting/mirror.png": "1bd7354efae07f4d54fb3535baecdb17",
"assets/assets/setting/face_detect.png": "a631707354c59d0e4a15461e21759d13",
"assets/assets/setting/mutemic.png": "011b98b06475571ad25c037eb60beafd",
"assets/assets/setting/error.svg": "9c6ec0bbd4444d3ca03bb37f052c4b82",
"assets/assets/setting/caption.png": "e621d19fb3f3f72c62e9ebe4910d1178",
"assets/assets/setting/mic.png": "8878d3d43698823ab1d82261bb422ee8",
"assets/assets/intro.gif": "37ab89ee7faa2851eb42dddda7319c4d",
"assets/assets/bg_img.png": "250529aa228ad01126a87393a11feb32",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
