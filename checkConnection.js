window.addEventListener('load', () => {
    console.log("Connection: " + navigator.onLine ? "Online" : "Offline");
});

window.addEventListener('online', () => {
    console.log("Connection: Online");
})

window.addEventListener('offline', () => {
    console.log("Connection: Offline");
})