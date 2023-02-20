const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

function compare(a, b) {
    if (a > b) {
        console.log(">");
    } else if (a < b) {
        console.log("<");
    }
    else {
        console.log("==");
    }
}

compare(Number(input[0]), Number(input[1]));