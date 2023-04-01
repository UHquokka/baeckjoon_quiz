const input = require('fs').readFileSync('/dev/stdin').toString().split("");
let newInput = input.map(v => v === "Y" || v === "Z" ? v = "W" : v === "S" ? v = "R" : v);
let indexArr = [];

const arr = 'ABCDEFGHIJKLMNOPQRTUVWXYZ'.split("");
newInput.map((v) => arr.includes(v) && indexArr.push(arr.indexOf(v)));

const secondArr = indexArr.map(v => parseInt(v / 3) + 3);
console.log(secondArr.reduce((sum, curr) => sum + curr));