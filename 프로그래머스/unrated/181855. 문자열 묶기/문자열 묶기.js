function solution(strArr) {
    let lengthArr = new Array(30).fill(0);
    strArr.map(v => lengthArr[v.length - 1] += 1)
    return Math.max(...lengthArr);
}
