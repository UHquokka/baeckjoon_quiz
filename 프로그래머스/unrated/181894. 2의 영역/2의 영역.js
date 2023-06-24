function solution(arr) {
    const start = [...arr].findIndex(v => v === 2);
    const last = [...arr].lastIndexOf(2);
    if (start === -1) {
        return [-1]
    } else {
        return start === last ? [2] : [...arr].splice(start, last - start + 1);
    }
}