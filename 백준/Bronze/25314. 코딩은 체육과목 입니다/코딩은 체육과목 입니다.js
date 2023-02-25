let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
const quantityOf4 = +input[0] / 4;

let board = "";
for (let i = 0; i < quantityOf4; i++) {
    board = `${board} long`;
}
console.log(board.trim(), "int");