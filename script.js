import { Snake } from "./Snake.js";
import { Food } from "./food.js";

const startBtn = document.getElementById('startBtn');
const refreshBtn = document.getElementById('refreshBtn');
const gameOverText = document.getElementById('gameover');
const canvas = document.getElementById('canvas');
const levelText = document.getElementById('currentLevel');
const scoreText = document.getElementById('score');

startBtn.addEventListener('click', (e) => {
    start(levels[level - 1].frames);
})

refreshBtn.addEventListener('click', () => {
    location.reload();
})

const c = canvas.getContext('2d');
c.fillStyle = '#0ae090';
c.strokeStyle = 'black';
const snake = new Snake(100, 100, 4);
const food = new Food(280, 160);
const levels = [
    { color: '#0ae090', frames: '500' },
    { color: '#0ae090', frames: '400' },
    { color: '#d4e00a', frames: '300' },
    { color: '#0adbe0', frames: '200' },
    { color: '#0a83e0', frames: '150' },
    // { color: '#7f0ae0', frames: '100' },
    // { color: '#e00a91', frames: '75' },
    // { color: '#e0360a', frames: '50' },
    // { color: '#ffffff', frames: '40' },
    // { color: '#ffffff', frames: '30' },
];
let level = 1;
let intervalId;
let score = 0;

function animate() {
    snake.update();
    if (!snake.alive) {
        gameOverText.style.display = 'block';
        return;
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    food.draw(c);
    snake.draw(c, levels[level - 1].color);
    changeColor();
    checkForEat();
    updateScore();
}

function start(frames) {
    if (!intervalId) {
        intervalId = setInterval(animate, frames);
    }
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function levelUp() {
    if (level < levels.length) {
        level += 1;
        levelText.innerHTML = level;
    }
}

function checkForEat() {
    if (
        snake.x === food.x &&
        snake.y === food.y
    ) {
        snake.grow();
        levelUp();
        score += 100;
        stop();
        start(levels[level - 1].frames);
        while (
            snake.positionArr.some(position => position.x === food.x && position.y === food.y)
        ) {
            food.regenerate()
        }
    }
}

function changeColor() {
    canvas.style.border = `1px solid ${levels[level - 1].color}`;
    startBtn.style.backgroundColor = levels[level - 1].color;
    refreshBtn.style.backgroundColor = levels[level - 1].color;

}

function updateScore() {
    scoreText.innerHTML = score;
}

snake.draw(c);
food.draw(c);


