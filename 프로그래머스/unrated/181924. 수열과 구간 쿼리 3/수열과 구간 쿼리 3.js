function solution(arr, queries) {
    let result = [...arr];
    queries.map(indexes => {
        const i1 = indexes[0];
        const i2 = indexes[1];
        result[i1] = arr[i2];
        result[i2] = arr[i1];
        arr = [...result];
    })
    return result;
}