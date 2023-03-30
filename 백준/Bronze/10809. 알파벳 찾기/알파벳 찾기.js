let input = require('fs').readFileSync('/dev/stdin').toString();

let alph = [];
for (i = 97; i <= 122; i++) {
    alph.push(input.indexOf(String.fromCharCode(i)));
}
console.log(alph.join(" "));
