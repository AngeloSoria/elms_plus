
// REMOVE "Toggle Dark Mode"
function removeToggleDarkMode() {
    setTimeout(() => {
        var dropDownHolder = document.querySelector(".linksHolder.dropDownHolder");
        var dropDownMenu = dropDownHolder.querySelector(".dropDown");
        var darkModeButton = dropDownMenu.firstElementChild;

        var context = darkModeButton.innerHTML;
        var find = context.toLowerCase().match("dark")

        if (find != -1) {
            dropDownMenu.removeChild(darkModeButton);
        }
    }, 1000)
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
            sound.play();
        } catch (error) {
            console.log(error)
        }
    } else {
        window.parent.postMessage('{"method": "playNotificationSound", "src": "/audio/notification-2.wav"}', '*');
    }
}

// START PROGRAM
let isLoaded = false;
window.onload = (event) => {
    console.log('eLMS+ Extension Loaded.')
    setTimeoutCountDown(99999999);
    removeToggleDarkMode()
    //notifications_sound()
    console.log(checkLocalStorage())
}




//===================

async function checkLocalStorage() {
    if (chrome.storage.local) {
        return await chrome.storage.local.get()
    } else {
        return null
    }
}

function setChromeLocalData(thisKey, value) {
    try {
        let arrData
        var getLocalStorage = checkLocalStorage()
        if (getLocalStorage != null) {
            arrData = getLocalStorage

            if (arrData.hasOwnProperty(thisKey)) {
                arrData[thisKey] = value
            } else {
                throw new Error("The key \'" + key + "\' not found.")
            }
        } else {
            arrData = {
                my_theme : "default",
                time_out_countdown : 0, // dropdown list index | 0 => default
            }
        }
        chrome.storage.local.set({EXTENSION_STORAGE_1 : arrData}, () => {
            console.log("[eLMS+]: " + arrData)
        })
    } catch (error) {
        console.error("[eLMS+]: " + error)
    }
}

function getChromeLocalData(key) {
    try {
        var getLocalStorage = checkLocalStorage()
        if (getLocalStorage != null) {
            if (getLocalStorage.hasOwnProperty(key)) {
                chrome.storage.local.get([key], (value) => {
                    console.log("get");
                    return value
                })
            } else {
                throw new Error("The key \'" + key + "\' not found.")
            }
        } else {
            throw new Error("Local Storage is null.")            
        }
    } catch (error) {
        console.error("[eLMS+]: " + error)
    }
}
