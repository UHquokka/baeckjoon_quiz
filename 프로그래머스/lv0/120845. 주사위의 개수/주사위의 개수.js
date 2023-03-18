function solution(box, n) {
    const count = box.map(v => Math.floor(v / n));
return count.reduce((mul, cur) => mul * cur, 1);
}