
function solution(sides) {
    var answer = 0;
    let newArr = sides.sort((a, b) => b - a);
    newArr[0] < (newArr[1] + newArr[2]) ? answer = 1 : answer = 2;
    return answer;
}