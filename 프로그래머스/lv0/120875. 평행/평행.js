function solution(dots) {
    let result = 0;
    const [a, b, c, d] = dots;
    const caseAB = (a[0] - b[0]) / (a[1] - b[1]) === (c[0] - d[0]) / (c[1] - d[1]);
    const caseAC = (a[0] - c[0]) / (a[1] - c[1]) === (b[0] - d[0]) / (b[1] - d[1]);
    const caseAD = (a[0] - d[0]) / (a[1] - d[1]) === (b[0] - c[0]) / (b[1] - c[1]);
    if (caseAB || caseAC || caseAD) result = 1;
    console.log(result);
    return result;
}