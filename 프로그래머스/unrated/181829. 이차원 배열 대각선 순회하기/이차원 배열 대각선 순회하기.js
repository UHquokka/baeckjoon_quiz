function solution(board, k) {
    let result = 0;
    board.map((v, i) => v.map((item, j) => { if (i + j <= k) { result += item } }))
    return result;
}