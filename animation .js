const image = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.pageX)/45;
    let y = (window.innerHeight/2 - e.pageY)/45;

    image.style.transform = `translate(${x}px,${y}px)`;

});