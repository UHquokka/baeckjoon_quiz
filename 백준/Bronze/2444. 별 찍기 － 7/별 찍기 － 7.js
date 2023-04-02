const input = require('fs').readFileSync('/dev/stdin').toString();
const N = +input;
const spaceStart = N - 1; //4
const resultLength = 2 * N - 1; //9

for (let i = spaceStart; i >= 0; i--) {
    let resultArr = new Array(resultLength);
    let star = resultLength - (2 * i);
    resultArr.fill(" ", 0, i);
    resultArr.fill("*", i, i + star);
    console.log(resultArr.join(""));
}
for (let i = 1; i < spaceStart + 1; i++) {
    let reversArr = new Array(resultLength);
    let star = resultLength - (2 * i);
    reversArr.fill(" ", 0, i);
    reversArr.fill("*", i, i + star);
    console.log(reversArr.join(""));
}