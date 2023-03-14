const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// const sideMenu = document.getElementById("sidemenu");
// function openMenu(){
//     sideMenu.style.right = "0"
// }
// function closeMenu(){
//     sideMenu.style.right = "-200px"
// }

