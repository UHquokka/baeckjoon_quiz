function solution(s) {
    let sArr = [...s].reverse();
    let length = [];

    while (sArr.length > 0) {
        let letter = sArr.shift();
        let sArrS = [...sArr].join("");
        let match = sArrS.match(letter)
        length.push(match !== null ? match.index + 1 : -1)
    }
    return length.reverse();
}