let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
input.shift();

const set = new Set(input);
[...set].sort().sort((a, b) => {
    return a.length - b.length
}).map(v=> console.log(v))