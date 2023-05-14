function solution(start, end) {
    let result = [];
    while (start <= end) {
        result.push(start);
        start += 1;
    }
    return result;
}