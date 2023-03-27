let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const basketCount = +input[0][0];
const loop = +input[0][1];

let baskets = [];
let revRange = [];
for (let i = 0; i < basketCount; i++) {
    baskets.push(i + 1);
    revRange.push(i + 1);
}

for (let i = 1; i <= loop; i++) {
    let from = +input[i][0];
    let to = +input[i][1];
    revRange = baskets.map(v => v);
    baskets = reverseFn(from, to, revRange, baskets);
}
console.log(...baskets);

function reverseFn(from, to, revRange, baskets) {
    revRange = revRange.splice(from - 1, to - from + 1).reverse();
    for (i = 0; i < to - from + 1; i++) {
        baskets[from + i - 1] = revRange[i];
    };
    return baskets;
}