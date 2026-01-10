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
        // body: "Has recibido una notificación.",
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
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(clientList => {
            // Si hay una ventana abierta, enfocarla
            for (const client of clientList) {
                if (client.url === self.location.origin + '/' && 'focus' in client) return client.focus();
            }
            // Si no, abrir una nueva
            if (clients.openWindow)
                return clients.openWindow('/');
        })
    );
});
