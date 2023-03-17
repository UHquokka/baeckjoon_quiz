function solution(my_string) {
    return  my_string.replaceAll(/([A-Z,a-z])/g, "").split("").reduce((sum, v) => sum + Number(v), 0);
}