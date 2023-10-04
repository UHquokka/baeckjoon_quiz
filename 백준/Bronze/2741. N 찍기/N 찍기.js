let input = require('fs').readFileSync('/dev/stdin').toString();
let result = '';
for (let i = 0; i < +input; i++) {
    result += (i + 1) + '\n'
}
console.log(result.slice(0, result.length - 1))