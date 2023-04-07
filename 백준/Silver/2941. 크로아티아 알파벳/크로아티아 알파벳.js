let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for (let i = 0; i < cro.length; i++) {
    input = input.replaceAll(cro[i], "C");
}
console.log(input.length);