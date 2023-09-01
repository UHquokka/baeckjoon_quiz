function solution(numbers) {
    const standard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = standard.filter(v => !numbers.includes(v));
    return result.reduce((a, b) => a + b)
}