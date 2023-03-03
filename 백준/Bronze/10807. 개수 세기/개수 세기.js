let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const length = input[0];
const array = input[1].split(" ").map(i => Number(i));
const countValue = Number(input[2]);

const isCollect = (num) => {
    if (num === countValue) { return true };
}

const result = array.filter(isCollect);

console.log(result.length);