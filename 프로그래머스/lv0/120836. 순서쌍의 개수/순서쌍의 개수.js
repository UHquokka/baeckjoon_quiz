function solution(n) {
    let nArr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) nArr.push(i);
    }
    return nArr.length;
}