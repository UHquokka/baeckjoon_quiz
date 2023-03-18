function solution(cipher, code) {
    let resultArr = [];
    [...cipher].forEach((v, index) => {
        index % code === code - 1 ? resultArr.push(v) : null;
    });
    return resultArr.join("");
}