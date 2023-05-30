function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(A[i] * B[i])
    }
    return result.reduce((a, b) => a + b);
}