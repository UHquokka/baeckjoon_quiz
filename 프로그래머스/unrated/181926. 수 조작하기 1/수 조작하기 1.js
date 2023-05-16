function solution(n, control) {
    const calNum = control.split("").map(v =>
        v == 'w' ? v = 1 : v == 's' ? v = -1 : v == 'd' ? v = 10 : v == 'a' ? v = -10 : 0).reduce((a, b) => a + b)
    return n + calNum;
}