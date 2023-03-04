let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const max = Math.max(...input);
console.log(max);

for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) === max) {
        console.log(i + 1);
    }
}