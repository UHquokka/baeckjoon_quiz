function solution(X, Y) {
    const Xcount = new Array(10).fill(0);
    const Ycount = new Array(10).fill(0);

    X.split("").map(v => Xcount[+v]++);
    Y.split("").map(v => Ycount[+v]++);

    const resultCount = [];
    let str = '';
    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(Xcount[i], Ycount[i]);
        str += Array.from({ length: minCount }, () => i).join("");
    }

    if (!str.length) {
        return "-1"
    } else if (Number(str) == 0) {
        return '0';
    } else {
        return str
    }
}
