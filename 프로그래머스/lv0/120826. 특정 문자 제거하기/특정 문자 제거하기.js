function solution(my_string, letter) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
        my_string = my_string.replace(letter, "");
    }
    answer = my_string;
    return answer;
}