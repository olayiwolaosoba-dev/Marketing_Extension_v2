import {registerRoute as workbox_routing_registerRoute} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-routing/registerRoute.mjs';
import {ExpirationPlugin as workbox_expiration_ExpirationPlugin} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-expiration/ExpirationPlugin.mjs';
import {CacheableResponsePlugin as workbox_cacheable_response_CacheableResponsePlugin} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-cacheable-response/CacheableResponsePlugin.mjs';
import {CacheFirst as workbox_strategies_CacheFirst} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-strategies/CacheFirst.mjs';
import {StaleWhileRevalidate as workbox_strategies_StaleWhileRevalidate} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-strategies/StaleWhileRevalidate.mjs';
import {clientsClaim as workbox_core_clientsClaim} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-core/clientsClaim.mjs';
import {precacheAndRoute as workbox_precaching_precacheAndRoute} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-precaching/precacheAndRoute.mjs';
import {cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs';
import {NavigationRoute as workbox_routing_NavigationRoute} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-routing/NavigationRoute.mjs';
import {createHandlerBoundToURL as workbox_precaching_createHandlerBoundToURL} from '/Users/oosoba/Downloads/marketing-extension-landing-page (2)/node_modules/workbox-precaching/createHandlerBoundToURL.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */








self.skipWaiting();

workbox_core_clientsClaim();


/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "registerSW.js",
    "revision": "5ce7b42cd2b84993e9edb328837feec8"
  },
  {
    "url": "pwa-512x512.png",
    "revision": "9849bf95562faab4fcf1f7ac045ce217"
  },
  {
    "url": "pwa-192x192.png",
    "revision": "9849bf95562faab4fcf1f7ac045ce217"
  },
  {
    "url": "index.html",
    "revision": "fb8589fcd29f54f4b4c9e9d8e35e2417"
  },
  {
    "url": "images/martech/video_thumb.png",
    "revision": "c1f5a9b1e23e35a292daac09368a691b"
  },
  {
    "url": "images/martech/tracking_drift.png",
    "revision": "7fc72177cd6908c7a166b85a47ec8869"
  },
  {
    "url": "images/martech/tool_sprawl.png",
    "revision": "cd51001cf03db25d836a4d5e2ec0f648"
  },
  {
    "url": "images/martech/pillar_product.png",
    "revision": "08948e974117fcc3097bf6d17738201d"
  },
  {
    "url": "images/martech/pillar_managed.png",
    "revision": "6cfbfd65647274924e8aae10aef28457"
  },
  {
    "url": "images/martech/pillar_automation.png",
    "revision": "36c3d45782b945272e364512aff85dee"
  },
  {
    "url": "images/martech/pillar_ai.png",
    "revision": "7ff7758fa54f5edc317b83094b1458b0"
  },
  {
    "url": "images/martech/data_duplication.png",
    "revision": "54b6b529f4834785a114d6dba372b2bc"
  },
  {
    "url": "images/martech/automation_gaps.png",
    "revision": "e9ad3282592504cd9eb744725ceb66cf"
  },
  {
    "url": "images/martech/attribution_lies.png",
    "revision": "a1f7c451bbf8b8ccbe1a4fe90bc05f85"
  },
  {
    "url": "images/martech/ai_data_risk.png",
    "revision": "dbf428308bc2ff2da56f82e66d9d9182"
  },
  {
    "url": "assets/service-martech-nug-ICvB.png",
    "revision": null
  },
  {
    "url": "assets/service-content-BT9HxpA3.png",
    "revision": null
  },
  {
    "url": "assets/service-consulting-BA4lIRxk.png",
    "revision": null
  },
  {
    "url": "assets/index-Cxa8rc_3.js",
    "revision": null
  },
  {
    "url": "pwa-192x192.png",
    "revision": "9849bf95562faab4fcf1f7ac045ce217"
  },
  {
    "url": "pwa-512x512.png",
    "revision": "9849bf95562faab4fcf1f7ac045ce217"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "36b7fbccd4251f1cd4623b11b1d355b7"
  }
], {});
workbox_precaching_cleanupOutdatedCaches();
workbox_routing_registerRoute(new workbox_routing_NavigationRoute(workbox_precaching_createHandlerBoundToURL("index.html")));


workbox_routing_registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox_strategies_CacheFirst({ "cacheName":"google-fonts-cache", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 31536000 }), new workbox_cacheable_response_CacheableResponsePlugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox_routing_registerRoute(/^https:\/\/images\.unsplash\.com\/.*/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"image-cache", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 2592000 })] }), 'GET');




