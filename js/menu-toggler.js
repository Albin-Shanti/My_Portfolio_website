/* ----------------------------------- toggle nav menu ------------------------------------ */

const menuToggle = document.querySelector(".nav-toggler");
menuToggle.addEventListener("click", () => {
   
    document.querySelector(".aside").classList.toggle("open");
})


// hide menu toggle on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".aside").classList.contains("open")) {
        
        document.querySelector(".aside").classList.remove("open");
    }
})