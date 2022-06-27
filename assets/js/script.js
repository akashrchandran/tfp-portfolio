$(window).on("load", function(){
    $('#loader_wrapper').fadeOut('slow');
});
// Header Scroll
let nav = document.querySelector(".navbar");
$( window ).scroll(function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 
)

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

/// Year retriver
try{
document.getElementById("year").innerHTML = (new Date().getFullYear());
}
catch(e)
{
    console.log(e);
}

// typing animation\
var options = {
    strings: ['Web Developer.', 'Student.', 'Tech Enthusiast.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
};

var typed = new Typed('.typerjs', options);


// Send Email func, should have used fetch but jquery seems to be nice
emailbutton = document.getElementById('sendmail');
function sendEmail() {
    emailbutton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
    emailbutton.classList.add("disabled_def");
    const name = document.getElementById("form-name");
    const phone = document.getElementById("form-phone");
    const email = document.getElementById("form-email");
    const message = document.getElementById("form-message");
    console.log(!name.value, !email.value, !message.value)
    if (!name.value || !email.value || !message.value) {
        emailbutton.style = "background: red";
        emailbutton.innerHTML = '<i class="fa fa-times"></i> Failed';
        setTimeout(location.reload.bind(location), 2000);

    }
    else {
        var data = {
            service_id: 'service_9fnrphq',
            template_id: 'template_ie65z47',
            user_id: 'XCfDptyHXB-M91Vj3',
            template_params: {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
            }
        };
        emailbutton.style = "cursor: pointer; pointer-events: none;";
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            emailbutton.innerHTML = '<i class="fa fa-check"></i> Sent';
            emailbutton.style = "background: green";
            setTimeout(location.reload.bind(location), 2000);
        }).fail(function (error) {
            emailbutton.innerHTML = '<i class="fa fa-times"></i> Failed';
            emailbutton.style = "background: red";
            setTimeout(location.reload.bind(location), 2000);
        });
    }
}

// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}