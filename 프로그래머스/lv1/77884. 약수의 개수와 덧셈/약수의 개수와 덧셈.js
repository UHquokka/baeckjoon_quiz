function solution(left, right) {
    const countingMeasure = (num) => {
        const measure = [];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) measure.push(j)
        }
        return measure.length;
    }
    let result = 0;
    for (let i = left; i <= right; i++) {
        if (countingMeasure(i) % 2 == 0) result += i;
        if (countingMeasure(i) % 2 != 0) result -= i;
    }
    return result;
}