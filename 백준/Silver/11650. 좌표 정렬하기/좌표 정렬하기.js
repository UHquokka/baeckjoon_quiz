const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const arr = [];
for (let i = 1; i <= +input[0]; i++) {
    const [x, y] = input[i].split(" ");
    arr.push([+x, +y])
}
let result = "";
arr.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
}).forEach(v => {
    result += `${v[0]} ${v[1]}\n`
})
console.log(result)