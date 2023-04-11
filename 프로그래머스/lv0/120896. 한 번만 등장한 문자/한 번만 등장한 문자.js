function solution(s) {
    const set = new Set(s.split(""));
    let result = [];
    Array(...set).map(v => {
        let reg = new RegExp(`[${v}]`, 'g');
        s.match(reg).length === 1 && result.push(v);
    })
    return result.sort().join("");
}