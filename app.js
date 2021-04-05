const menuButton = document.querySelector(".hamburger");
const menu = document.querySelector(".topNav")
const links = document.querySelector(".topNavLinks")

function slideMenu() {
    if (menu.style.width == "") {
        menu.style.width = "250px";
        menuButton.style.color = "white";
        menuButton.innerHTML = "X";
        links.style.opacity = "100";      
    } else if (menu.style.width == "250px") {
        menu.style.width = ""
        menuButton.style.color = "black";
        menuButton.innerHTML = "☰";
        links.style.opacity = "0";
    }
} 

