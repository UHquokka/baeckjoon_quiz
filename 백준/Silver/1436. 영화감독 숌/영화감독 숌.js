const fs = require("fs");
let input = fs.readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

let num = 666;
let count = 1;

while (count != +input[0]) {
    num++;
    if ((num + '').includes('666')) {
        count++;
    }
}
console.log(num)