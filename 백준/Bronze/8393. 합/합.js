let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let loop = +input[0];

console.log(loop * (loop + 1) / 2);
