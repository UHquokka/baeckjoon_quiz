let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(" "));

const test = input.map(v => String(...v).replace("\r", ""));
const edge = () => {

    for (let i = 1; i <= Number(input[0]); i++) {
        let result = [];
        result.push(test[i][0]);
        result.push(test[i][test[i].length - 1]);

        console.log(result.join(""));
    }
}
edge();
