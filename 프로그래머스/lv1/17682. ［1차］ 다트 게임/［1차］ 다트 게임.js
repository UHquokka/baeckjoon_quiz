function solution(dartResult) {
    const regNum = /[0-9]/;
    const regSt = /[^0-9]/;
    const score = dartResult.split(regSt).filter(v => v !== "")
    const result = dartResult.split(regNum).filter(v => v !== "");
    let sumAll = [];
    result.map((v, i) => {
        let sum = v[0] == "S" ? score[i] : v[0] == "D" ? score[i] ** 2 : score[i] ** 3;
        if (!v[1]) {
            sumAll.push(Number(sum));
        }

        if (v[1] == "#") {
            sum = sum * -1;
            sumAll.push(Number(sum));
        }

        if (v[1] == "*") {
            if (i === 0) {
                sum *= 2;
                sumAll.push(Number(sum));
            } else {
                sumAll[i - 1] *= 2;
                sumAll.push(sum * 2)
            }
        }
    })
    return sumAll.reduce((a, b) => a + b);
}