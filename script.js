var canvas = document.getElementById('draw')
var check = document.querySelector('.check')
var context = canvas.getContext('2d')
canvas.width = window.innerWidth;
context.strokeStyle = `BADA55`;
context.lineCap = 'round';
context.lineJoin= 'round';
context.lineWidth = 100;

let isDrawing = false
let lastX = 0; 
let lastY = 0; 
let hue = 0
let direction = true

function draw(e) {
    if (!isDrawing) return
    console.log(e)
    
    context.beginPath();
    //starts from
    context.moveTo(lastX, lastY);
    //goes to
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.stroke();
    // [lastX, lastY] = [e.offsetX, e.offsetY];
    lastY = e.offsetY;
    lastX = e.offsetX;
    hue++;

    if(hue >= 360) {
        hue = 0
    }

    if(context.lineWidth >= 100) {
        context.lineWidth = 10;
    }
    if(context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction= true) {
        context.lineWidth++
    } else {
        context.lineWidth--
    }
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastY = e.offsetY;
    lastX = e.offsetX;
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

