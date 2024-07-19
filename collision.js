export function collision(x, y, width, positionArr) {
    if (
        wallCollision(x, y, width) ||
        selfCollision(x, y, positionArr)
    ) {
        return true;
    }

    return false;
}

function wallCollision(x, y, width) {
    if (
        x + width > canvas.width ||
        x < 0 ||
        y + width > canvas.height ||
        y < 0
    ) {
        return true;
    }

    return false;
}

function selfCollision(x, y, positionArr) {
    if (positionArr.some(position => position.x === x && position.y === y)) {
        return true;
    }

    return false;
}