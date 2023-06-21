function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const checkFn = (pattern, answers) => {
        let test = [...answers];
        const checkCount = test.reduce((acc, cur, ind) => {
            if (ind < pattern.length) {
                return cur === pattern[ind] ? acc + 1 : acc;
            }
            else {
                if (cur) {
                    return cur === pattern[ind % pattern.length] ? acc + 1 : acc;
                } else {
                    test.slice(1);
                    return acc;
                }
            }
        }, 0)
        return checkCount;
    }

    const aR = checkFn(a, answers);
    const bR = checkFn(b, answers);
    const cR = checkFn(c, answers);
    const max = Math.max(aR, bR, cR);
    let result = [];
    [aR, bR, cR].map((v, i) => v === max && result.push(i + 1));
    return result;
}

