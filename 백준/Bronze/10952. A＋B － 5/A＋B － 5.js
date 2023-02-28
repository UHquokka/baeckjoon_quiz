let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const loop = Number(input.length - 1);
let numbers = "";
for (let i = 0; i <= loop; i++) {
    numbers = input[i].split(" ").map(n => Number(n));
    if (numbers[0] !== 0) { console.log(numbers[0] + numbers[1])};
}
