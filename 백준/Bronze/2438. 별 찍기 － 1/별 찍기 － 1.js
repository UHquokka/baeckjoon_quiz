let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const loop = +input[0];
for (i = 1; i <= loop; i++) {
    let stars = ""
    for (j = 0; j <= i-1; j++) {
        stars += "*"
    }
    console.log(stars.trim());
}