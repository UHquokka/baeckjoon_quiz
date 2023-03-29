let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const string = String(input[1]).split("").reduce((sum, i) => Number(sum) + Number(i));

console.log(string);