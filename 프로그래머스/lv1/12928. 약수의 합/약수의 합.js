function solution(n) {
    let num = 1;
    let sum = 0;
    while (num <= n) {
        n % num === 0 ? sum += num : 0;
        num++;
    }
    return sum;
}