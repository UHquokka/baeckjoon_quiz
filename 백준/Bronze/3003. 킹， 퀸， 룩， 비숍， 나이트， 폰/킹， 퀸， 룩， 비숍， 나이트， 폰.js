const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

const king = 1 - input[0];
const queen = 1 - input[1];
const rock = 2 - input[2];
const vishop = 2 - input[3];
const night = 2 - input[4];
const phone = 8 - input[5];

console.log(`${king} ${queen} ${rock} ${vishop} ${night} ${phone}`);