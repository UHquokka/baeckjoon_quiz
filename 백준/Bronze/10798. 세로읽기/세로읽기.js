let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const loop = Math.max(...input.map(v => v.length));
let result = "";

for (let i = 0; i < loop; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) { result += input[j][i] }
  }
}

console.log(result)