let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
const [n, m] = input[0].split(" ");
const arr = input[1].split(" ");

const sums = [];
for (let i = 0; i < n; i++) {
    for (let k = i+1; k < n; k++) {
        for (let j = k+1; j < n; j++) {
            const sum = +arr[i] + +arr[k] + +arr[j];
            if (sum <= m) {
                sums.push(sum)
            }
        }
    }
}
console.log(Math.max(...sums))