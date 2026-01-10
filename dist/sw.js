// Service Worker para notificaciones push

self.addEventListener('install', (event) => {
    console.log('Background notification installed!');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Background notification activated!');
    event.waitUntil(self.clients.claim());
});

// Manejar notificaciones push
self.addEventListener('push', (event) => {
    console.log('Background notification received!');
    const notification = event.data.json();
    let data = {
        title: 'OE App - Nueva notificación',
        body: `Has recibido una notificación de ${notification.fromUser.alias}.`
    };
    const options = {
        body: data.body,
        icon: './notification-icon.svg',
        badge: './notification-icon.svg',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Manejar clic en notificación
self.addEventListener('notificationclick', (event) => {
    console.log('Background notification clicked!');
    event.notification.close();
    // Obtener la ruta base desde la ubicación del Service Worker
    let basePath = self.location.pathname.split('/sw.js')[0] || '/oe-app-frontend-build';
    // Asegurar que termine con /
    if (!basePath.endsWith('/')) basePath += '/';
    const appUrl = self.location.origin + basePath;
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(clientList => {
            // Si hay una ventana abierta, enfocarla
            for (const client of clientList) {
                if (client.url.startsWith(appUrl) && 'focus' in client) return client.focus();
            }
            // Si no, abrir una nueva
            if (clients.openWindow)
                return clients.openWindow(basePath);
        })
    );
});
