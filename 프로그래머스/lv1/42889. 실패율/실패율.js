function solution(N, stages) {
    let challengeCount = stages.length;
    let failRate = [];
    let failCount = 0;
    for (let i = 1; i <= N; i++) {
        let successCount = stages.filter(v => v > i).length
        challengeCount -= failCount;
        failCount = challengeCount - successCount;
        failRate.push([i, failCount / challengeCount])
    }
    return failRate.sort((a, b) => b[1] - a[1]).map(v => (v[0]))
}