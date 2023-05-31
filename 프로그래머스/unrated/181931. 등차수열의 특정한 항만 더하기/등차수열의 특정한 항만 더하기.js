function solution(a, d, included) {
    const arr = [];
    included.map((v, i) => v && arr.push(a + d * i))
    return arr.reduce((a, b) => a + b)
}