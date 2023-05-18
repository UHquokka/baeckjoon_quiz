function solution(n) {
    let i = 0;
    let result = 0;
    while (i <= n) {
        if (n % 2 !== 0) {
            i % 2 !== 0 ? result += i : 0;
        } else {
            i % 2 === 0 ? result += i ** 2 : 0
        }
        i++;
    }
return result
}
