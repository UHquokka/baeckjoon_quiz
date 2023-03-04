let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let testArray = input[1].split(" ").map(i => Number(i));

console.log(Math.min(...testArray), Math.max(...testArray));