let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const N = +input[0];

for (let i = 1; i <= N; i++) {
    let [H, W, N] = input[i].split(" ")
    const floor = N % H === 0 ? H : N % H;
    const ho = Math.ceil(N / H)
    console.log(ho < 10 ? `${floor}0${ho}` : `${floor}${ho}`)
}
