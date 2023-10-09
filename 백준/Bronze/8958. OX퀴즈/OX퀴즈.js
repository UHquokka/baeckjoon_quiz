let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));
for (let i = 1; i <= Number(input[0]); i++) {
    const testCase = input[i].split("");
    let nowScore = 0;
    let count = 0;
    for (let j = 0; j < testCase.length; j++) {
        if (testCase[j] == 'O') {
            count++;
        } else {
            count = 0;
        }
        nowScore += count;
    }
    console.log(nowScore)
}