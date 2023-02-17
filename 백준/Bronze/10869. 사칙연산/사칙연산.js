const fs = require('fs');
let input = fs.readFileSync('/dev/stdin');
input = input.toString().split(' ');

const a = +input[0];
const b = +input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);