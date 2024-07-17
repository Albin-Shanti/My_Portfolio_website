//typing text animation

var typed = new Typed(".typing", {
    strings:["  ","Game Programmer", "Unity Developer", "Game Developer", "Unreal Developer"],
    typeSpeed:100,
    BackSpeed:20,
    loop:true
})

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header div li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};