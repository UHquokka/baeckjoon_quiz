let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));


const s = String(input[0]);
const n = Number(input[1]);

const raiseScore = (s, n) => {
    console.log(s[n-1]);
}

raiseScore(s, n);