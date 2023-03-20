function solution(numbers, direction) {
    let resultArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (direction === "right") {
            i + 1 !== numbers.length ? resultArr[i + 1] = numbers[i] : resultArr[0] = numbers[i];
        } else if (direction === "left") {
            i - 1 < 0 ? resultArr[numbers.length - 1] = numbers[i] : resultArr[i - 1] = numbers[i];
        }
    }
    console.log(resultArr);
    return resultArr;
}