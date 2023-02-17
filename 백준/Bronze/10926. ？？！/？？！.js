const fs = require('fs');
let input = fs.readFileSync('/dev/stdin');
input = input.toString().trim();
const id = input;
console.log(`${id}??!`);