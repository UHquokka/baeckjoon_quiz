function solution(my_string) {
    return  my_string.split("").filter(v => ["a", "i", "e", "o", "u"].includes(v) ? v = "" : v).join("");
}