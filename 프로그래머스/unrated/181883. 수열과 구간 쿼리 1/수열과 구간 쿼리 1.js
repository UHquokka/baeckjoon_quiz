function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        arr = arr.map((v, i) => (s <= i && i <= e) ? v + 1 : v);
    })
return arr;
}