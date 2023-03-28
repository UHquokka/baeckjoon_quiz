let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const s = String(input[0]);
// const n = Number(input[1]);

const raiseScore = (s) => {
    console.log(s.length);
}

raiseScore(s);