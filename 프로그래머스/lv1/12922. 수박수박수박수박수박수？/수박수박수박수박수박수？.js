function solution(n) {
    let r = "";
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? r += "수" : r += "박"
    }
    return r
}