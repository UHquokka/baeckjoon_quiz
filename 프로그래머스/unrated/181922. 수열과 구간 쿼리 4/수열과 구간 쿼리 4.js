function solution(arr, queries) {
    let copy = [...arr];
    queries.map(query => {
        let [s, e, k] = query;
        copy.map((v, i) => {
            if (s <= i && i <= e) {
                if (i % k === 0) copy[i] += 1
            }
        })
    })
    return copy;
}