function solution(lottos, win_nums) {
    let matched = 0;
    let zero = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) { zero++ }
        else if (win_nums.includes(lottos[i])) { matched++ }
    }
    const [max, less] = [zero + matched, matched];
    let result = [7 - max >= 6 ? 6 : 7 - max, 7 - less >= 6 ? 6 : 7 - less]
    return result;
}