function solution(numbers) {
    let mulArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            mulArr.push(numbers[i] * numbers[j]);
        }
    }
    mulArr.sort((a, b) => b - a);
    return mulArr[0];
}