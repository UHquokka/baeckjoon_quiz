let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const stack = [];
const result = [];
for (let i = 0; i <= +input[0]; i++) {
    const [order, x] = input[i].split(" ");
    // console.log(order, x);
    order === 'push' && stack.push(x);
    order === 'pop' && result.push((stack.length > 0 ? stack.pop() : -1));
    order === 'size' && result.push(stack.length);
    order === 'empty' && result.push(stack.length > 0 ? 0 : 1)
    order === 'top' && result.push(stack.length > 0 ? stack[stack.length - 1] : -1)
}
console.log(result.join("\n"))