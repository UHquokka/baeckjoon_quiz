function solution(my_string, n) {
    var answer = my_string.split("").map(i => i.repeat(n)).join("");
    return answer;
}