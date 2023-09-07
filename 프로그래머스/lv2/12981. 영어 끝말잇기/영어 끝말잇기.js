function solution(n, words) {
    const result = [0, 0];
    let breakNumber = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 2) {
            break;
        }
        if (i > 0) {
            if ([...words[i - 1]].pop() != words[i][0]) {
                breakNumber = i;
                break;
            }
            if ([...words].splice(0, i - 1).includes(words[i])) {
                breakNumber = i;
                break;
            }
        }
    }
    if (breakNumber !== 0) {
        result[0] = breakNumber % n + 1;
        result[1] = Math.ceil((breakNumber + 1) / n);
    }
    return result
}