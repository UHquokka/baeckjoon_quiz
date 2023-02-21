let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
input = input.map((item) => Number(item));
console.log(input[0] + input[1] + input[2]);