let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const loop = +input[0];

for (let i = 1; i <= loop; i++) {
    repeatFn(Number(input[i].split(" ")[0]), String(input[i].split(" ")[1].replace('\r', "")));
}

function repeatFn(num, text) {
    let resultArr = [];

    text.split("").map(v => {
        for (let i = 0; i < num; i++) {
            resultArr.push(v);
        }
    });
    console.log(resultArr.join(""));
}
