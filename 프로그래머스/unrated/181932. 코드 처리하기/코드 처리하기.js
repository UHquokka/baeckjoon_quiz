function solution(code) {
    let mode = 0;
    let ret = [];
    [...code].forEach((char, i) => {
        if (mode === 0) {
            char !== "1" ? (i % 2 === 0 && ret.push(char)) : mode = 1
        } else if (mode === 1) {
            char !== "1" ? (i % 2 === 1 && ret.push(char)) : mode = 0
        }
    })
    return ret.join("").length===0?"EMPTY" : ret.join("") ;
}