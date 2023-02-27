let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const loop = +input[0];

let stars = "";
for (i = 1; i <= loop; i++) {
    let blanks = "";
    stars += "*"
    for (j = 1; j <= loop - i; j++) {
        blanks += " "
    }
    console.log(blanks + stars)
}