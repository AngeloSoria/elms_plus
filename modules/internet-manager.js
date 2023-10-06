
export function checkInternetConnection() {
    if (arguments === true) {
        return navigator.onLine
    } else {
        return navigator.onLine ? "online" : "offline"
    }
}