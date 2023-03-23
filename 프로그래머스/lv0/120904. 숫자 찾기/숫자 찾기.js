
function solution(num, k) {
    const result = String(num).split("").findIndex(v => v === String(k));
return result < 0 ? -1 : result + 1;
}
