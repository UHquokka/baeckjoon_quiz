function solution(a, b) {
    let measures = [];
    for (let i = 1; i <= Math.max(a, b); i++) {
        a % i === 0 && b % i === 0 ? measures.push(i) : null;
    }
    let resultNum = b / Math.max(...measures);
    if (resultNum === 1) {
        return 1;
    } else {
        while (resultNum % 2 === 0) resultNum = resultNum / 2;
        while (resultNum % 5 === 0) resultNum = resultNum / 5;
    }
    return resultNum === 1 ? 1 : 2;
}