let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

const num1 = input[0];
const num2 = input[1];
const num3 = input[2];

if (num1 === num2 && num2 === num3) {
    console.log(10000 + num1 * 1000)
} else if (num1 === num2 || num1 === num3) {
    console.log(1000 + num1 * 100);
} else if (num2 === num3) {
    console.log(1000 + num2 * 100);
} else {
    //1이 제일 클 경우
    if (num1 > num2) {
        num1 > num3 ? console.log(num1 * 100) : console.log(num3 * 100);
    } else {
        num2 > num3 ? console.log(num2 * 100) : console.log(num3 * 100);
    }
}