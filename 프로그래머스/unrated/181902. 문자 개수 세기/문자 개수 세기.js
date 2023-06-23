function solution(arr) {
    let result = Array(52).fill(0);
    [...arr].map((v) => {
        let code = v.charCodeAt();
        code < 91 ? result[v.charCodeAt() - 65] += 1 : result[v.charCodeAt() - 71] += 1
    })
return result;
}