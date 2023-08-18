let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
const subEven = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0
}
const subjects = input.filter(v => v.split(" ")[2] !== "P");
let subSum = 0;
const sum = subjects.reduce((acc, cur) => {
  const [sub, score, grade] = cur.split(" ");
  subSum += Number(score);
  return acc + subEven[grade] * score
}, 0)
console.log((sum/subSum).toFixed(6))