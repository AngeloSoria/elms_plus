var DisclaimerButton = document.getElementById("disclaimerButton")
var DisclaimerText = document.getElementById("discContent");

DisclaimerButton.addEventListener('mouseenter', function () {
    DisclaimerText.classList.add('disclaimerActive');
});


var isPanelOpen = false;
DisclaimerButton.addEventListener('mouseleave', function () {
    DisclaimerText.classList.remove('disclaimerActive');
});

async function getExtensionPageTab(url) {
    return new Promise((resolve) => {
        chrome.tabs.query(
            {
                url
            },
            ([tab]) => resolve(tab || null)
        );
    });
}

async function openExtensionPage(page) {
    const url = chrome.runtime.getURL('/assets/' + page + '/index.html');
    const extensionPageTab = await getExtensionPageTab(url);

    if (extensionPageTab !== null) {
        chrome.windows.update(extensionPageTab.windowId, {
            focused: true
        });
        window.close();
    } else {
        chrome.windows.create({
            url,
            type: "popup",
            width: 750,
            height: 600,
        });
        window.close();
    }
}


document.getElementById("btn-settings").addEventListener("click", () => {
    openExtensionPage("settings")

    // Request notification permission
    chrome.notifications.getPermissionLevel(function (permission) {
        if (permission === "granted") {
            // Create and display a notification
            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: "Hello",
                message: "This is a notification from your extension!",
            });
        } else {
            console.warn("Notification permission not granted.");
        }
    });
})








//Theme select onchange
/*
var themeSelect = document.querySelector("#themeSelect");
themeSelect.addEventListener('change', function(event){
    const targetValue = event.target.value;

    if(targetValue == "create-new"){
        chrome.runtime.sendMessage({"arg1": targetValue});
    }
});*/