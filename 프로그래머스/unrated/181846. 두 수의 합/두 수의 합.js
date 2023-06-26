function solution(a, b) {
    const bigInt = Number.MAX_SAFE_INTEGER;
    if (a <= bigInt && b <= bigInt) {
        return Number(a) + Number(b) + '';
    } else if (a > bigInt || b > bigInt) {
 return BigInt(a) + BigInt(b)+'';
    }
}