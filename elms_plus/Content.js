// REMOVE "Toggle Dark Mode"
function removeToggleDarkMode() {
    try {
        var dropDownButton = document.querySelector(".linksHolder.dropDownHolder");
        var dropDownMenu = dropDownButton.lastElementChild;
        var darkModeButton = dropDownMenu.firstElementChild;

        var context = darkModeButton.innerHTML;
        var find = context.search("dark")

        if (find != -1) {
            dropDownMenu.removeChild(darkModeButton);
        }
    } catch (error) {
        console.error(error)
    };
}


// FUNCTION to prevent automatic logout when site is out of focus.
function setTimeoutCountDown(value) {
    const delay = 5000;

    // Delayed function to wait for the cookies to load.
    setTimeout(() => {
        //console.log(document.cookie);
        //var cookie = document.cookie;
        var thisCookie = ['session_timeout_seconds=', 'session_timeout_countdown=']

        if (document.cookie.match(thisCookie[0]) && document.cookie.match(thisCookie[1])) {
            for (var index = 0; index < thisCookie.length; index++) {
                document.cookie = thisCookie[index] + value + "; path=/;";
                //console.log(thisCookie[index])
                //console.log(document.cookie)
            }
        } else {
            console.log("setTimeoutCountDown not found. skipping...")
        }
        console.log('setTimeoutCountDown loaded.')
    }, delay)
}



function notifications_sound() {
    if (self == top) {
        var sound = new Audio('https://cdn.pixabay.com/audio/2022/11/20/audio_7a4c62d146.mp3');
        document.body.click();
        sound.play();
    } else {
        window.parent.postMessage('{"method": "playNotificationSound", "src": "/audio/notification-2.wav"}', '*');
    }
}

// START PROGRAM
window.onload = (event) => {
    console.log('eLMS+ Extension Loaded.')
    notifications_sound()
    setTimeoutCountDown(99999999);
}
