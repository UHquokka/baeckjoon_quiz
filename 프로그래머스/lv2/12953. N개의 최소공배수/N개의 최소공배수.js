function solution(arr) {
    const max = Math.max(...arr);
    for(i=1; i<= arr.reduce((a,b)=>a*b, 1); i++){
    if(arr.every(v=> max*i%v === 0)) {
        return max * i }
    }
}