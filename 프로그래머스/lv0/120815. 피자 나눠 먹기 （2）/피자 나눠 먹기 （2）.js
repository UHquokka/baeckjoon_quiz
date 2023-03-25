function solution(n) {
    let max = 0;
    for (let i = 0; i <= 6; i++) {
        if (6 % i === 0 && n % i === 0) max = i;
    }
    return n / max;
}