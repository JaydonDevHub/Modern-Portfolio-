/*==================================================
    CONTACT.JS
    Contact Form Validation + WhatsApp
==================================================*/

"use strict";

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=
contactForm.querySelector('input[type="text"]').value.trim();

const email=
contactForm.querySelector('input[type="email"]').value.trim();

const subject=
contactForm.querySelectorAll("input")[2].value.trim();

const message=
contactForm.querySelector("textarea").value.trim();

/*=========================
VALIDATION
=========================*/

if(name===""){

alert("Please enter your name.");

return;

}

if(email===""){

alert("Please enter your email.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

if(message===""){

alert("Please enter your message.");

return;

}

/*=========================
WHATSAPP MESSAGE
=========================*/

const phone="254111498830";

const text=

`Hello Michael Waweru,

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

const whatsappURL=

`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

window.open(whatsappURL,"_blank");

/*=========================
SUCCESS
=========================*/

alert("Thank you! You will now be redirected to WhatsApp.");

contactForm.reset();

});

}