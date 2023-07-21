function solution(rank, attendance) {
    const attend = [];
    rank.forEach((r, n) => {
        if (attendance[n]) {
            attend.push([r, n])
        }
    })
    const result = attend.sort((a, b) => a[0] - b[0]).filter((_, i) => i < 3).map(v => v[1]);
return 10000 * result[0] + 100 * result[1] + result[2];
}