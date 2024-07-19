import { Snake } from "./Snake.js";
import { Food } from "./food.js";

const startBtn = document.getElementById('startBtn');
const refreshBtn = document.getElementById('refreshBtn');
const gameOverText = document.getElementById('gameover');
const canvas = document.getElementById('canvas');

startBtn.addEventListener('click', (e) => {
    start();
})

refreshBtn.addEventListener('click', () => {
    location.reload();
})

const c = canvas.getContext('2d');
c.fillStyle = '#0adbe0'
c.strokeStyle = 'black'
const snake = new Snake(100, 100, 4);
const food = new Food(280, 160);

function animate() {
    snake.update();
    if (!snake.alive) {
        gameOverText.style.display = 'block';
        return;
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(c);
    food.draw(c);

    checkForEat();
}

function start() {
    setInterval(animate, 150);
}

function checkForEat() {
    if (
        snake.x === food.x &&
        snake.y === food.y
    ) {
        snake.grow();
        while (
            snake.positionArr.some(position => position.x === food.x && position.y === food.y)
        ) {
            food.regenerate()
        }
    }
}

snake.draw(c);
food.draw(c);


