function solution(myStr) {
    const arr = myStr.split(/[a|b|c]/).filter(v => v !== "");
    return arr.length ? arr : ["EMPTY"]
}