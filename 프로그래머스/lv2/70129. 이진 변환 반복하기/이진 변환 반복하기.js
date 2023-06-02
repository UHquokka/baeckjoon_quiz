function solution(s) {
    let zero = 0;
    let count = 0;
    while (s !== "1") {
        zero += s.split("1").join("").length;
        s = s.split("0").join("").length.toString(2);
        count++;
    }
    return [count, zero];
}