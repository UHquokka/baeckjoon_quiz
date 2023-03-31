let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(v => Number(v.split("").reverse().join("")));
console.log(input[0] > input[1] ? input[0] : input[1]);
