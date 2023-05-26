function solution(binomial) {
    const cal = binomial.split(" ");
    const a = Number(cal[0]);
    const b = Number(cal[2]);
    if (cal[1] === "+") {
        return a + b;
    } else if (cal[1] === "-") {
        return a - b;
    } else {
        return a * b;
    }
}