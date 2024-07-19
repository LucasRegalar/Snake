export class Snake {
    constructor(xPosition, yPosition, length) {
        this.x = xPosition;
        this.y = yPosition;
        this.positionArr = [
            { x: xPosition - 60, y: yPosition },
            { x: xPosition - 40, y: yPosition },
            { x: xPosition - 20, y: yPosition },
            { x: xPosition, y: yPosition }
        ]
        this.dx = 20;
        this.dy = 0;
        this.length = length;
        this.width = 20;
        this.alive = true;

        document.addEventListener('keydown', (e) => {
            this.turn(e);
        });
    }

    update() {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.positionArr.push({ x: this.x, y: this.y });

        if (
            this.x + this.width > canvas.width ||
            this.x < 0 ||
            this.y + this.width > canvas.height ||
            this.y < 0
        ) {
            this.alive = false;
        }
    }

    draw(c) {
        const snakeElements = this.positionArr.slice(this.positionArr.length - this.length);
        snakeElements.forEach(position => {
            c.fillRect(position.x, position.y, this.width, this.width);
        });
    }

    turn(e) {
        switch (e.key) {
            case 'ArrowUp':
                this.dx = 0;
                this.dy = -20;
                break;
            case 'ArrowDown':
                this.dx = 0;
                this.dy = 20;
                break;
            case 'ArrowLeft':
                this.dx = -20;
                this.dy = 0;
                break;
            case 'ArrowRight':
                this.dx = 20;
                this.dy = 0;
                break;
        }
    }
}