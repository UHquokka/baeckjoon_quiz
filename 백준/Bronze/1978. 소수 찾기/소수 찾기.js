let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const arr = input[1].split(" ").map(Number);
let result = 0;
arr.map((v, i) => {
    const measures = [];
    for (let i = 1; i <= v / 2; i++) {
        if (v % i === 0) {
            measures.push(i)
        }
    }
    if (measures.length === 1) {
        result++;
    }
})
console.log(result)