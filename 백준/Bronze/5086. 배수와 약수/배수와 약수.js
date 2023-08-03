let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

input.map(((v, i) => {
    const numbers = v.split(" ");
    if (i < input.length - 1) {
        console.log(numbers[0] % numbers[1] === 0 ? "multiple" : numbers[1] % numbers[0] === 0 ? "factor" : "neither")
    }
}))  