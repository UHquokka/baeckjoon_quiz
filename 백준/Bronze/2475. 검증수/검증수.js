let input = require('fs').readFileSync('./dev/stdin').toString();
let sum = 0;
const arr = input.split(" ").map(Number);
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2
}
console.log(sum % 10)