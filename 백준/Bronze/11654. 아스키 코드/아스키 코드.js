let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const char = String(input[0]);

console.log(char.charCodeAt());