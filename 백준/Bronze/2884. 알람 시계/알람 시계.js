let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
input = input.map(Number);

const hour = input[0] == 0 ? 24 : input[0];    
const minutes = input[1];

const backTo45Minutes = hour * 60 + minutes - 45;

const earlyHour = Math.floor(backTo45Minutes / 60);
const earlyMinites = backTo45Minutes - earlyHour * 60;
console.log(earlyHour == 24 ? 0 : earlyHour, earlyMinites);