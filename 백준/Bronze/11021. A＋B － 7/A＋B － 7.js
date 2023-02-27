let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const loop = +input[0];

for (i = 1; i <= loop; i++) {
    let numbers = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${numbers[0] + numbers[1]}`);
}
