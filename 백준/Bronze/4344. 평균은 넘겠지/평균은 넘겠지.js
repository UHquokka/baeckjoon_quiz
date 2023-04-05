let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const test = +input[0];

for (let i = 1; i <= test; i++) {
    let sub = input[i].split(" ").map(v => Number(v));
    let student = sub.shift();
    let ever = sub.reduce((sum, v) => sum + v, 0) / student;
    let overEver = sub.filter(v => v > ever);
    let percent = ((overEver.length / student )* 100).toFixed(3);
    console.log(percent + '%');
}