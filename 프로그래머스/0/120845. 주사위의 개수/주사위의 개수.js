function solution(box, n) {
    return box.map(v=> Math.floor(v/n)).reduce((a,b)=>a*b);
}