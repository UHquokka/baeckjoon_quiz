const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(v => BigInt(v));
console.log((input[0] + input[1]).toString());
