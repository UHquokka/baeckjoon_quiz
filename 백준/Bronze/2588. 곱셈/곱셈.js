const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const num1 = parseInt(input[0]);

const oneNum = (input[1] % 10);
const tenNum = (Math.floor((input[1] % 100) / 10));
const hunNum = (Math.floor(input[1] / 100));


console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hunNum);
console.log(num1 * (oneNum + tenNum * 10 + hunNum * 100));