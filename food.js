export class Food {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.width = 20;
        this.regenerate();
    }

    draw(c) {
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, this.width, this.width);
        c.strokeRect(this.x, this.y, this.width, this.width);
    }

    regenerate() {
        this.x = Math.round(Math.random() * (canvas.width - 20) / 20) * 20;
        this.y = Math.round(Math.random() * (canvas.height - 20) / 20) * 20;
    }
}