function solution(intStrs, k, s, l) {
    let result = [];
    const arr = intStrs.map(string => {
        const num = Number(string.slice(s, s + l))
        num > k && result.push(num);
    });
    return result;
}