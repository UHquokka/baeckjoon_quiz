function solution(my_string, queries) {
    let arr = [...my_string];
    queries.map(query => {
        const [s, e] = query;
        const deleted = arr.splice(s, e - s + 1).reverse();
        arr.splice(s, 0, ...deleted)
    })
    return arr.join("")
}
