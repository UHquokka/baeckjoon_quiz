let input = require('fs').readFileSync(0).toString().split("\n");
function quadrant(a, b) {
    if (a > 0) {
        if (b > 0) {
            console.log(1);
        } else if (b < 0) {
            console.log(4);
        }
    } else if (a < 0) {
        if (b > 0) {
            console.log(2);
        } else if (b < 0) {
            console.log(3);
        }
    }
}
quadrant(input[0], input[1]);