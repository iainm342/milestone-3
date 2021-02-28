//New User Sign Up

var emailjs;

var form = document.getElementById("contact");

//function to activate EmailJS API
function sendMail(contactForm) {
    emailjs.send("gmail", "registration", {
        "from_name": contactForm.user_first.value,
        "from_email": contactForm.user_email.value,
    });
}