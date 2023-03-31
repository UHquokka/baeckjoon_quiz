let input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.length === 0 ? 0 : input.split(" ").length);