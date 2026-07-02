"use strict";
const typingElement = document.getElementById("typing");
const words = [
    "Software Developer",
    "Full Stack Developer",
    "Java Programmer",
    "Python Developer",
    "Frontend Developer",
    "UI / UX Enthusiast",
    "Problem Solver",
    "Open Source Learner"
];
let wordIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 120;
function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
        typingSpeed = 120;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
        typingSpeed = 60;
    }
    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        typingSpeed = 300;
    }
    setTimeout(typeEffect, typingSpeed);
}
if (typingElement) typeEffect();
const cursor = document.createElement("span");
cursor.className = "typing-cursor";
cursor.textContent = "|";
typingElement.after(cursor);
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);