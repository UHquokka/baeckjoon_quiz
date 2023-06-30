function solution(N, stages) {
    let challengeCount = stages.length;
    let successCount = 0;
    let failCount = 0;
    let failRate = [];

    for (let i = 1; i <= N; i++) {
        challengeCount -= failCount;
        successCount = stages.filter(v => v > i).length
        failCount = challengeCount - successCount;

        failRate.push([i, failCount / challengeCount])
    }
    return failRate.sort((a, b) => b[1] - a[1]).map(v => Number(v[0]))
}