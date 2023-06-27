function solution(arr) {
    let count = 0;
    let pCount = 0;

    while (count !== arr.length) {
        pCount++;
        count = 0;
        arr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 === 1) {
                return v * 2 + 1;
            } else {
                count++;
                return v;
            }
        })
    }
    return pCount-1;
}