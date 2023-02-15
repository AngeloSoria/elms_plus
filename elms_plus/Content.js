// REMOVE "Toggle Dark Mode"
function removeToggleDarkMode() {
    setTimeout(() => {
        try {
            var dropDownHolder = document.querySelector(".linksHolder.dropDownHolder");
            var dropDownMenu = dropDownHolder.querySelector(".dropDown");
            var darkModeButton = dropDownMenu.firstElementChild;
    
            var context = darkModeButton.innerHTML;
            var find = context.toLowerCase().match("dark")
            
            console.log(darkModeButton)

            if (find != -1) {
                dropDownMenu.removeChild(darkModeButton);
                alert("yes 222", find)
            } else {
                alert("no")
            }
        } catch (error) {
            console.error(error)
        };
    }, 2000)
}


// FUNCTION to prevent automatic logout when site is out of focus.
function setTimeoutCountDown(value) {
    const delay = 5000;

    // Delayed function to wait for the cookies to load.
    setTimeout(() => {
        var thisCookie = ['session_timeout_seconds=', 'session_timeout_countdown=']

        if (document.cookie.match(thisCookie[0]) && document.cookie.match(thisCookie[1])) {
            for (var index = 0; index < thisCookie.length; index++) {
                document.cookie = thisCookie[index] + value + "; path=/;";
                console.log('setTimeoutCountDown loaded.')
            }
        } else {
            console.log("setTimeoutCountDown not found. skipping...")
        }
    }, delay)
}



function notifications_sound() {
    if (self == top) {
        try {
            var sound = new Audio('https://cdn.pixabay.com/audio/2022/11/20/audio_7a4c62d146.mp3');
            document.body.click();
            sound.play();
        } catch (error) {
            console.log(error)
        }
    } else {
        window.parent.postMessage('{"method": "playNotificationSound", "src": "/audio/notification-2.wav"}', '*');
    }
}

// START PROGRAM
window.onload = (event) => {
    console.log('eLMS+ Extension Loaded.')
    notifications_sound()
    setTimeoutCountDown(99999999);
    removeToggleDarkMode()
}
