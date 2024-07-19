import { Snake } from "./Snake.js";

const startBtn = document.getElementById('start');

const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d');

c.fillStyle = '#0adbe0'

const snake = new Snake(240, 240, 1);


function animate() {
    snake.update();
    if (!snake.alive) {
        return;
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(c);
}

function start() {
    setInterval(animate, 1000);
}

snake.draw(c);


startBtn.addEventListener('click', (e) => {
    start();
})