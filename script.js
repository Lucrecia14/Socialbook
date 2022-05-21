// Variable Declaration
var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
// java function for a drop-down menu
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
// java function for a toggle button and to switch bg color
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }


}



if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

// This means that the "localStorage" name is "theme" and its value is "light"
localStorage.setItem("theme", "light");
// To read the value of localStorage
// This will give the value of localStorage name called "theme"
localStorage.getItem("theme");




