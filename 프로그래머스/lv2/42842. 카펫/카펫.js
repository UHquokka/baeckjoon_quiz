function solution(brown, yellow) {
    const all = brown + yellow;
    for (let i = Math.ceil(all / 2); i > 2; i--) {
        const ver = all / i;
        const hor = i
        if (ver >= hor && (ver) % 1 === 0) {
            if (2 * (ver + hor) - 4 === brown) return [ver, hor]
        }
    }
}