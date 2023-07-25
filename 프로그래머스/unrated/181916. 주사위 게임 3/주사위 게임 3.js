function solution(a, b, c, d) {
    const set = new Set([a, b, c, d]);
    const setArr = [...set];
    if (setArr.length === 1) {
        return 1111 * a
    } else if (setArr.length === 2) {
        let lengthA = [a, b, c, d].filter(v => v === setArr[0]).length;
        let lengthB = [a, b, c, d].filter(v => v === setArr[1]).length;
        if (lengthA === 3 || lengthB === 3) {
            return lengthA === 3 ? (10 * setArr[0] + setArr[1]) ** 2 : (10 * setArr[1] + setArr[0]) ** 2
        } else {
            return (setArr[0] + setArr[1]) * Math.abs(setArr[0] - setArr[1])
        }
    } else if (setArr.length === 3) {
        let double = [];
        setArr.forEach(num => {
            if ([a, b, c, d].filter(v => v === num).length == 1) double.push(num)
        })
        return double[0] * double[1]
    } else {
        return Math.min(a, b, c, d)
    }
}