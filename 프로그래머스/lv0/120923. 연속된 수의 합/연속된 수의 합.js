function solution(num, total) {
    let numSum = 0;
    let i = 0;
    while (i < num) {
        numSum += i;
        i++;
    }
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push((total - numSum) / num + i)
    }
    return result;
}