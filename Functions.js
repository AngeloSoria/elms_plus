
function checkLocalStorage() {
    if (chrome.storage.local) {
        return chrome.storage.local
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

function save_1() {
    chrome.storage.local.set({EXTENSION_STORAGE_1 : {my_theme : "default", time_out_countdown : 0,}}, () => {
        console.log("[eLMS+]: " + arrData)
    })
}