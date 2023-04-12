function solution(n) {
    let result = [].sort((a, b) => a - b);
    let measures = [];
    for (let i = 1; i < n + 1; i++) {
        n % i === 0 && measures.push(i);
    }
    measures.map(v => {
        let measures2 = [];
        for (let i = 1; i <= v; i++) {
            v % i === 0 && measures2.push(i);
        }
        measures2.length === 2 && result.push(v);
    })
    return result;
}