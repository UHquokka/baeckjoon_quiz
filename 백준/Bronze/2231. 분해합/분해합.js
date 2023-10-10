let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const originalNum = Number(input[0]);
const result = [];
for (let i = 1; i < originalNum; i++) {
    const nums = (i + '').split("").map(Number);
    if (nums.reduce((a, c) => a + c) + i === originalNum) {
        result.push(i)
    }
}
console.log(result.length > 0 ? Math.min(...result) : 0)