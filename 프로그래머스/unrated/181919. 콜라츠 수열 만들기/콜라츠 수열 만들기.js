function solution(n) {
    let colla = [];
    while (n !== 1) {
        colla.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    colla.push(1);
    return colla;
}