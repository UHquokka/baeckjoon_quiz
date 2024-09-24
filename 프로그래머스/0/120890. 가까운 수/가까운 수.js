function solution(array, n) {
    const gap = array.sort().map(v=> Math.abs(n-v));
    const min = Math.min(...gap);
    const i = gap.indexOf(min);
    return array[i]
}