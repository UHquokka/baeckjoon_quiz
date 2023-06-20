function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        if (i % m === m-1) sum += score[i] * m;
    }
    return sum;
}