function solution(a, b) {
    if (a === b) return a;
    return a < b ? (b - a + 1) * (a + b) / 2 : (a - b + 1) * (a + b) / 2
}