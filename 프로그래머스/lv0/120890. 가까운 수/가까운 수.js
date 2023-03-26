
function solution(array, n) {
    const gapArr = array.map(v => n - v > 0 ? n - v : -(n - v));
    const minGap = Math.min(...gapArr);
    const minGapValueArr = array.filter(v => n - v === minGap || v - n === minGap);
    const result = minGapValueArr.length > 1 ? Math.min(...minGapValueArr) : minGapValueArr[0];
return result;
};