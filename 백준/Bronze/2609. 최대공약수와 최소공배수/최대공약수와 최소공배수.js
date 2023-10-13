const fs = require("fs");
let input = fs.readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
const [n1, n2] = input[0].split(" ");
if (n1 === n2) { console.log(n1 + "\n" + n2) }
else {
    const measures = [];
    for (let i = 1; i <= Math.min(n1, n2); i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            measures.push(i)
        }
    }
    const max = Math.max(...measures);
    const min = n1 / max * n2 / max * max;
    console.log(`${max}\n${min}`)
}