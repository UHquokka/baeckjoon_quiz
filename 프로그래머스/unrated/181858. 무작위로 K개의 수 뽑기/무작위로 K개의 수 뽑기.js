function solution(arr, k) {
    const basic = new Array(k).fill(-1);
    const set = [...new Set(arr)];
    const result = basic.map((v, i) => set[i] === 0 || set[i] ? set[i] : v);
return result
}