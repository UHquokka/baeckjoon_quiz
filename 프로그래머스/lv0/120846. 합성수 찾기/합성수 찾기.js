function solution(n) {
    let iCount = 0;
    for (let i = 1; i <= n; i++) {
        let jCount = 0;
        for (let j = 2; j < i; j++) {
            i % j === 0 && jCount++;
        }
        jCount > 0 && iCount++;
    }
    return iCount;
}

