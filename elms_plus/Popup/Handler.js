var DisclaimerButton = document.getElementById("disclaimerButton")
var DisclaimerText = document.getElementById("discContent");

DisclaimerButton.addEventListener('mouseenter', function(){
    DisclaimerText.classList.add('disclaimerActive');
});

DisclaimerButton.addEventListener('mouseleave', function(){
    DisclaimerText.classList.remove('disclaimerActive');
});


//Theme select onchange
/*
var themeSelect = document.querySelector("#themeSelect");
themeSelect.addEventListener('change', function(event){
    const targetValue = event.target.value;

    if(targetValue == "create-new"){
        chrome.runtime.sendMessage({"arg1": targetValue});
    }
});*/