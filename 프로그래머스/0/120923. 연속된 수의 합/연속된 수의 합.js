function solution(num, total) {
    const arr = new Array(num);
    for(i=0; i<num; i++){
    num%2 === 1  ?  arr[i] = Math.floor(total/num) - Math.floor(num/2) + i            : arr[i] = Math.ceil(total/num) - Math.floor(num/2) + i
    }
    return arr    
}