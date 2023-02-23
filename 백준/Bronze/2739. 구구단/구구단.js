let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

const num = input[0];
for (i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
