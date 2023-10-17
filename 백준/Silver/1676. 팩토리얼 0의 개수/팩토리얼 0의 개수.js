const fs = require("fs");
let input = fs.readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
let facto = 1;
for (let i = 1; i <= +input[0]; i++) {
  facto = BigInt(facto)*BigInt(i);
}
let count = 0;
for (let char of [...facto.toString()].reverse()) {
  if (char === "0") count++;
  if (char !== "0") {
    break;
  }
}
console.log(count);


