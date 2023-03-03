let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const length = input[0].split(" ")[0];
const standardValue = Number(input[0].split(" ")[1]);
const testArray = input[1].split(" ").map(i => Number(i));
let collectNumbers = "";
for (let i = 0; i < length; i++) {
    if (standardValue > testArray[i]) {
        collectNumbers += `${testArray[i]} `;
    }
}
console.log(collectNumbers.trim());