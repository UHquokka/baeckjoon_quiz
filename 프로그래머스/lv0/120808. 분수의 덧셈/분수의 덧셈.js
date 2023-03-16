function solution(numer1, denom1, numer2, denom2) {
    const den = denom1 * denom2;
    const num = numer1 * denom2 + numer2 * denom1;
    const answerArr = [num, den];
    let denNums = [];
    for (let i = 1; i <= den; i++) {
        den % i === 0 ? denNums.push(i) : null;
    }
    let numNum = [];
    for (let i = 1; i <= num; i++) {
        num % i === 0 ? numNum.push(i) : null;
    }
    const devideNums = denNums.filter(i => numNum.includes(i));
    const devideNum = (devideNums[devideNums.length - 1]);
    return answerArr.map(i => i / devideNum);
}