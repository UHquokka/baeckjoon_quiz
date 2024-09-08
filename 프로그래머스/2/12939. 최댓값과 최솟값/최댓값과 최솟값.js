function solution(s) {
 let arr= s.split(' ').map(v=> Number(v));
    return (Math.min(...arr)+' '+Math.max(...arr))
 }