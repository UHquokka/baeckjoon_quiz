let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const loop = +input[0];
let numArray = "";

for (i = 1; i <= loop; i++) {
    let numbers = input[i].split(" ").map(Number);
    numArray +=numbers[0] + numbers[1] + "\n";
}
console.log(numArray);

