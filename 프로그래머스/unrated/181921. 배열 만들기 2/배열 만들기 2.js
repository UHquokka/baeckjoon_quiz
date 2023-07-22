function solution(l, r) {
    const arr = [];
    for (let i = l; i <= r; i++) {
        if ([...String(i)].every(a => a === "5" || a === "0")) {
            arr.push(i)
        }
    }
    return arr.length === 0 ? [-1] : arr;
}