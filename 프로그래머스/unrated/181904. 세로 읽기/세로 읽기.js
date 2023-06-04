function solution(my_string, m, c) {
    let result = "";
    for (let i = 0; i < my_string.length; i++) {
        if (i % m === c - 1) result += [...my_string][i]
    }
 return result;
}