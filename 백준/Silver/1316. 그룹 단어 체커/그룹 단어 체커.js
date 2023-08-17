let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
let count = input[0];
for (let i = 1; i <= input[0]; i++) {
  const word = input[i];
  const letters = [];

  for (let j = 0; j < word.length; j++) {
    const char = word[j];
    if (letters.indexOf(char) === -1) {
      letters.push(char);
    } else {
      if (letters.indexOf(char) !== letters.length - 1) {
        count--;
        break;
      }
    }
  }
}
console.log(count)
