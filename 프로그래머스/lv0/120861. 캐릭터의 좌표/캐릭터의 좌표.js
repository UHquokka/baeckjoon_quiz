function solution(keyinput, board) {
    let point = [0, 0];
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    keyinput.map(key => {
        if (point[0] < xLimit && key === "right") {
            point[0] += 1
        } else if (point[0] > -xLimit && key === "left") {
            point[0] -= 1
        };

        if (point[1] < yLimit && key === "up") {
            point[1] += 1
        } else if (point[1] > -yLimit && key === "down") {
            point[1] -= 1
        }
    })
    return point;
}