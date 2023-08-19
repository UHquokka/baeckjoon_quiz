let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

let max = 0;
let location = ""
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const num = input[i].split(" ")
    if (Number(num[j]) >= max) {
      max = num[j]
      location = `${i + 1} ${j + 1}`
    };
  }
}
console.log(max);
console.log(location.toString())