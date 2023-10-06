chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("Message: ", message.arg1);
    console.log("Sender: ", sender);
    window.open("./MainModule/Index.html","_blank");
    sendResponse()
});

chrome.runtime.onInstalled.addListener(function() {
    console.log("eLMS+ installed.");
});