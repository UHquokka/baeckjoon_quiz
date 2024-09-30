function solution(polynomial) {
    let num = 0;
    let xNum = 0;
    polynomial.split(' + ').forEach(v=> {
        Number(v) ? num += Number(v) : v==='x'? xNum += 1 : xNum += Number(v.replace('x', ''))});
    let x = xNum ? xNum == 1? 'x' : xNum+'x' : '';
    let n = num ? num : '';
    return x&&n ? `${x} + ${n}` :  !n ? `${x}` : `${n}` 
}