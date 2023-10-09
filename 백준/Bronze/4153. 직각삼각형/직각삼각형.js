let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

for (let i = 0; i < input.length - 1; i++) {
    const lengths = input[i].split(" ").map(Number).sort((a, b) => a - b);
    const result = lengths[0] ** 2 + lengths[1] ** 2 === lengths[2] ** 2 ? 'right' : 'wrong';
    console.log(result)
}