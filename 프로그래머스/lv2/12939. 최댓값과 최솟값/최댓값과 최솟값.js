function solution(s) {
    const numArr = s.split(" ").map(Number)
    const max = Math.max(...numArr);
    const min = Math.min(...numArr);
    return `${min} ${max}`
}