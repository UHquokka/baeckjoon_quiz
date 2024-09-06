function solution(n){
    let sum = 0;
    n.toString().split('').map(v=> sum = sum+Number(v));
    return sum;
}