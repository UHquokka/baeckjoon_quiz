function solution(board, moves) {
    const basket = [];
    let count = 0;
    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move - 1] !== 0) {
                if (basket[basket.length - 1] === board[i][move - 1]) {
                    count++;
                    basket.pop();
                } else {
                    basket.push(board[i][move - 1]);
                }
                board[i][move - 1] = 0;
                break;
            }
        }
    });
    return count * 2
}