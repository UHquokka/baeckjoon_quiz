let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const n = input[0];
const subs = input[1];

const m = Math.max(...subs);

const raiseScore = (subs, maxSub) => {
    let newScores = subs.map(v => v / maxSub * 100);
    return newScores.reduce((sum, v) => sum + v) / n;
}

console.log(raiseScore(subs, m));