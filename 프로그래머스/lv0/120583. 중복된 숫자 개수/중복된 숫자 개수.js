function solution(array, n) {
    let answer = array.filter(i => i === n).length;
    return answer;
}