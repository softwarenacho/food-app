if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let t = {};
    const u = (e) => n(e, c),
      r = { module: { uri: c }, exports: t, require: u };
    s[c] = Promise.all(a.map((e) => r[e] || u(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-c06b064f'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/YSCgpGv0SuGnpLKSSsu7s/_buildManifest.js',
          revision: '2ec694eb52ae4f523f265a46bae4d768'
        },
        {
          url: '/_next/static/YSCgpGv0SuGnpLKSSsu7s/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        { url: '/_next/static/chunks/173-caa7a1129b9b4892.js', revision: 'YSCgpGv0SuGnpLKSSsu7s' },
        { url: '/_next/static/chunks/190-d11fb469fa49911e.js', revision: 'YSCgpGv0SuGnpLKSSsu7s' },
        { url: '/_next/static/chunks/231-22afb9ce475211e1.js', revision: 'YSCgpGv0SuGnpLKSSsu7s' },
        { url: '/_next/static/chunks/318-6c4009a8679fc7eb.js', revision: 'YSCgpGv0SuGnpLKSSsu7s' },
        {
          url: '/_next/static/chunks/app/_not-found/page-bc753c845863fc0a.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/error-4b6c9350fbfe0ec8.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/layout-ee99a811292969b6.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/page-71e6c6e91e88ea47.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/product/%5Bhandle%5D/page-b1b7309865b46865.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/search/%5Bcollection%5D/page-1fa9436141dd3a2f.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/search/layout-2c681bb3ec955677.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/search/loading-76c3be7c692ff1b6.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/app/search/page-5da23b4536febf61.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/fd9d1056-0eb99f8da7a6839e.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/framework-aec844d2ccbe7592.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        { url: '/_next/static/chunks/main-485bfcfcb8c2f8b9.js', revision: 'YSCgpGv0SuGnpLKSSsu7s' },
        {
          url: '/_next/static/chunks/main-app-9f12564390e0ffaa.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3'
        },
        {
          url: '/_next/static/chunks/webpack-eaea02094ce8e2f0.js',
          revision: 'YSCgpGv0SuGnpLKSSsu7s'
        },
        { url: '/_next/static/css/7ddfd134126e2c61.css', revision: '7ddfd134126e2c61' },
        {
          url: '/_next/static/media/e11418ac562b8ac1-s.p.woff2',
          revision: '0e46e732cced180e3a2c7285100f27d4'
        },
        { url: '/images/icons/icon-128x128.png', revision: '06ba417f99b8e529ec5b0647a56ea3b2' },
        { url: '/images/icons/icon-144x144.png', revision: '8364c784f8fb7c373bd8e670bccf5bfe' },
        { url: '/images/icons/icon-152x152.png', revision: 'b872d95a51de9498dd67195f78700f9a' },
        { url: '/images/icons/icon-192x192.png', revision: '7be87b02b4e682ed455265ead2720377' },
        { url: '/images/icons/icon-384x384.png', revision: 'd41d8cd98f00b204e9800998ecf8427e' },
        { url: '/images/icons/icon-512x512.png', revision: '5142670e578ca5d434272b7765ff7a66' },
        { url: '/images/icons/icon-72x72.png', revision: 'ad157e9251c5e98d9cfca123cee4029c' },
        { url: '/images/icons/icon-96x96.png', revision: 'b7a463d250b7f9831e982aeffc0265aa' }
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
                : e
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith('/api/auth/callback') || !s.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: n }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        n &&
        !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: n }) =>
        '1' === e.headers.get('RSC') && n && !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
      }),
      'GET'
    );
});
