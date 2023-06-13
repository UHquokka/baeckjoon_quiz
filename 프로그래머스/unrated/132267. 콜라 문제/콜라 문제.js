function solution(a, b, n) {
    let count = 0;
    while (n >= a) {
        count += Math.floor(n / a) * b;
        n = n % a + Math.floor(n / a) * b;
    }
    return count;
}