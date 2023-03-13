
function solution(numbers) {
    var answer = 0;
    answer = (numbers.reduce((sum, value) => sum += value)) / numbers.length;
    return answer;
}