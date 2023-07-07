function solution(number, limit, power) {
    const measures = [];
    for (let i = 1; i <= number; i++) {
        let num = i;
        let result = []
        let index = 1;
        while (index <= Math.sqrt(num)) {
            if (num % index === 0) {
                result.push(index)
                if (num / index !== index) {
                    result.push(num / index)
                }
            }
            index++
        }
        measures.push(result.length)
    }
    const m = measures.reduce((a, b) => {
        if (b > limit) return power + a;
        return a + b;
    })
    return m;
}