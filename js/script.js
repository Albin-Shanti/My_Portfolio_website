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

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "albinshanti2000@gmail.com",
        Password : "6D720D2A373F59BAEAD9B7157620D0D1FBA7",
        To : 'albinshanti2000@gmail.com',
        From : "albinshanti2000@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      
        message => { 
           if (message == "OK") {
                Swal.fire({
                   title: "Success!",
                   text: "Message sent successfully!",
                   icon: "success"
                });
            }
       }
    
    );

}

function checkInputs() {
    const items = document.querySelectorAll(".form-control");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //checkInputs();

    sendEmail();
});