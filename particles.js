/*==================================================
    PARTICLES.JS
    Simple Floating Background Particles
==================================================*/

"use strict";

const canvas = document.createElement("canvas");
canvas.id = "particles";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/*=============================================
PARTICLE SETTINGS
=============================================*/

const particles = [];
const particleCount = 80;

class Particle{

    constructor(){

        this.reset();

        this.y = Math.random() * canvas.height;

    }

    reset(){

        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;

        this.radius = Math.random() * 3 + 1;

        this.speed = Math.random() * 0.8 + 0.2;

        this.opacity = Math.random() * 0.5 + 0.2;

    }

    update(){

        this.y -= this.speed;

        if(this.y < -10){

            this.reset();

        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.radius,

            0,

            Math.PI * 2

        );

        ctx.fillStyle =
        `rgba(124,58,237,${this.opacity})`;

        ctx.fill();

    }

}

for(let i=0;i<particleCount;i++){

    particles.push(new Particle());

}

function animate(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    particles.forEach(particle=>{

        particle.update();

        particle.draw();

    });

    requestAnimationFrame(animate);

}

animate();

/*=============================================
CANVAS STYLE
=============================================*/

canvas.style.position = "fixed";
canvas.style.left = "0";
canvas.style.top = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";