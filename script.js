import { Snake } from "./Snake.js";

const startBtn = document.getElementById('start');
const canvas = document.getElementById('canvas')

startBtn.addEventListener('click', (e) => {
    start();
})

const c = canvas.getContext('2d');
c.fillStyle = '#0adbe0'
c.strokeStyle = 'black'
const snake = new Snake(100, 100, 4);

function animate() {
    snake.update();
    if (!snake.alive) {
        return;
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(c);
}

function start() {
    setInterval(animate, 500);
}

snake.draw(c);

