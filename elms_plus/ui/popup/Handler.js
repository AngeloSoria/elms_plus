var DisclaimerButton = document.getElementById("disclaimerButton")
var DisclaimerText = document.getElementById("discContent");

DisclaimerButton.addEventListener('mouseenter', function(){
    DisclaimerText.classList.add('disclaimerActive');
});


var isPanelOpen = false;
DisclaimerButton.addEventListener('mouseleave', function(){
    DisclaimerText.classList.remove('disclaimerActive');
});

document.getElementById("btn-settings").addEventListener("click", () => {
    openExtensionPage("settings")
})


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
    const url = chrome.runtime.getURL('/ui/' + page + '/index.html');
    const extensionPageTab = await getExtensionPageTab(url);

    if(extensionPageTab !== null) {
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



//Theme select onchange
/*
var themeSelect = document.querySelector("#themeSelect");
themeSelect.addEventListener('change', function(event){
    const targetValue = event.target.value;

    if(targetValue == "create-new"){
        chrome.runtime.sendMessage({"arg1": targetValue});
    }
});*/