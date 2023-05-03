function solution(polynomial) {
    const polyArr = polynomial.split("+").map(v => v.trim()).map(v => v === 'x' ? '1' + v : v);
    const xArr = [];
    const number = [];
    polyArr.map(v => v.match(/[0-9]+[x]/g) ? xArr.push(v.replace('x', "")) : number.push(v));
    const xNumSum = xArr.length > 0 ? xArr.reduce((a, b) => Number(a) + Number(b)) : '';
    const numSum = number.length > 0 ? number.reduce((a, b) => Number(a) + Number(b)) : '';

    if (xNumSum === '1') {
        return xNumSum && numSum ? `x + ${numSum}` : xNumSum && !numSum ? `x` : `${numSum}`;
    } else {
        return xNumSum && numSum ? `${xNumSum}x + ${numSum}` : xNumSum && !numSum ? `${xNumSum}x` : `${numSum}`;
    }
}