function solution(board) {
    let count = 0;
    const n = board.length;
    let markArr = board.map(v => v.map(i => i = 0));
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (board[x][y] === 1) {
                markArr[x][y] = 'X';
                y - 1 >= 0 ? markArr[x][y - 1] = 'X' : null;
                y + 1 < n ? markArr[x][y + 1] = 'X' : null;

                (x - 1 >= 0 && y - 1 >= 0) ? markArr[x - 1][y - 1] = 'X' : null;
                x - 1 >= 0 ? markArr[x - 1][y] = 'X' : null;
                x - 1 >= 0 && y + 1 < n ? markArr[x - 1][y + 1] = 'X' : null;

                x + 1 < n ? markArr[x + 1][y] = 'X' : null;
                x + 1 < n && y - 1 >= 0 ? markArr[x + 1][y - 1] = 'X' : null;
                x + 1 < n && y + 1 < n ? markArr[x + 1][y + 1] = 'X' : null;
            }
        }
    }
    markArr.map(v => v.map(i => i === 0 ? count += 1 : i));
    return count;
}