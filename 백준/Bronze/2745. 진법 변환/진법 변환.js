let input = require('fs').readFileSync('./dev/stdin').toString().replaceAll("\n" || "|r", "");
const [letter, standardNum] = input.split(" ");
let ans = parseInt(letter, Number(standardNum));
console.log(ans);