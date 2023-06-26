function solution(n) {
    let isPrime = new Array(n + 1).fill(true).fill(false, 0, 2)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false
            }
        }
    }
    return isPrime.filter(Boolean).length;
}