let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
const arr = [];
for (let i = 1; i <= +input[0]; i++) {
    arr.push(input[i])
}
console.log(arr.sort((a,b)=> a-b).join("\n"))