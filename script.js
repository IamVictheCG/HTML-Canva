var canvas = document.getElementById('draw')
var check = document.querySelector('.check')
var context = canvas.getContext('2d')
canvas.width = window.innerWidth
context.strokeStyle = "#BADA55"
context.lineCap = 'round'
context.lineJoin= 'round'

let isDrawing = false
// let lastX = 0
// let lastY = 0

function draw(e) {
    // console.log(e)
    return e
}

check.innerHTML = canvas.addEventListener('mousemove', draw())

