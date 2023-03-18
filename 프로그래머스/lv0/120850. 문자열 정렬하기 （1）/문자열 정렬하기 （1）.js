function solution(my_string) {
    return [...my_string].filter(v => v.replace(/[a-z]/g, "")).map(v => Number(v)).sort((a, b) => a - b);
}