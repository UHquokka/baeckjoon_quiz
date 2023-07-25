function solution(arr, query) {
    query.map((q, i) => {
        if (i % 2 === 0) {
            arr.splice(q + 1)
        } else if (i % 2 === 1) {
            arr.splice(0, q)
        }
    })
    return arr;
}