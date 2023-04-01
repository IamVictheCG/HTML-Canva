var canvas = document.getElementById('draw')
var check = document.querySelector('.check')
var context = canvas.getContext('2d')
canvas.width = window.innerWidth
context.strokeStyle = "#BADA55"
context.lineCap = 'round'
context.lineJoin= 'round'

let isDrawing = false
let lastX = 0; 
let lastY = 0; 

function draw(e) {
    if (!isDrawing) return
    console.log(e)

    context.beginPath();
    //starts from
    context.moveTo(lastX, lastY);
    //goes to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastY = e.offsetY;
    lastX = e.offsetX;
    // [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

