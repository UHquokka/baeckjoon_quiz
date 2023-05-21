function solution(arr1, arr2) {
    const sum1 = arr1.reduce((a, b) => a + b);
    const sum2 = arr2.reduce((a, b) => a + b);
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        return sum1 !== sum2 ? sum1 > sum2 ? 1 : -1 : 0
    }
}