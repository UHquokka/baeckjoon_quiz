function solution(my_string) {
    const num = my_string.replace(/[^0-9]/g, " ").split(" ").map(v => Number(v));
    return num.reduce((sum, cur) => sum + cur);
}