let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const loop = input[0];

for (let i = 1; i <= loop; i++) {
    const plus = input[i].split(" ");
    console.log(Number(plus[0]) + Number(plus[1]));
}