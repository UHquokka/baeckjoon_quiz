function solution(arr, queries) {
    let result = [];
    queries.map(array => {
        const [s, e, k] = array;
        let candi = [];
        for (let i = s; i < e + 1; i++) {
            arr[i] > k && candi.push(arr[i])
        }
        result.push(candi.length > 0 ? Math.min(...candi) : -1)
    })
    return result;
}