const log = console.log;

log("main");

const mainContainer = document.querySelector('.main');

// log(mainContainer)
const canvas = document.querySelector(".my-canvas");
const ctx = canvas.getContext('2d');

// log(ctx);

const mcWidth = mainContainer.clientWidth;
const mcHeight = mainContainer.clientHeight;

log(mcWidth,mcHeight);
// log(canvas.width, canvas.height);

canvas.width = 8/10 * mcWidth;
canvas.height = 9.8/10 * mcHeight;

// log(canvas.width, canvas.height);

function drawCircle(){

    ctx.beginPath();
    const radius = Math.floor(Math.random() * 20) + 10;
    const rand_height = Math.random() * (canvas.height - 4*radius) + 2*radius;
    const rand_width = Math.random() * (canvas.width - 4*radius) + 2*radius;

    if (canvas.width < 4 * radius || canvas.height < 4 * radius) {
        // Skip drawing if the canvas is too small for the circle
        return;
    }

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    ctx.arc(rand_width, rand_height, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.1)`;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// drawCircle();

// for(let i=0;i<51;i++){
//     drawCircle();
// }

let i = 0;
// Continuously animates the canvas by drawing circles at intervals using requestAnimationFrame.
function animate(){
    if((i++)%5 === 0)
        drawCircle();
    requestAnimationFrame(animate);
}

animate();