const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(v => (v.replace("\r", "")));
const arr = input.map(v => v.split(" "));
const N = arr[0][0];
const M = arr[0][1];

let baskets = [];
let baskets2 = [];
for (let i = 1; i <= N; i++) {
    baskets.push(i);
    baskets2.push(i);
}
const rotateArr = (start, mid, end) => {
    let rotateNum = [];
    rotateNum = baskets.splice(start - 1, end - start + 1);
    const originMidIndex = baskets2[mid - 1];
    const newMidIndex = rotateNum.findIndex(v => v === originMidIndex);
    let midNums = rotateNum.splice(newMidIndex, rotateNum.length - newMidIndex);
    let finishedRotateNums = [...midNums, ...rotateNum];

    baskets2.splice(start - 1, end - start + 1, ...finishedRotateNums);
    return baskets2;
}

for (let i = 1; i <= M; i++) {
    let start = +arr[i][0];
    let end = +arr[i][1];
    let mid = +arr[i][2];

    baskets = rotateArr(start, mid, end).map(v => v);
    baskets2 = baskets.map(v => v);
}
console.log(...baskets);
