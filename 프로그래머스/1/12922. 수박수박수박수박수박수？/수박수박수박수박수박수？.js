function solution(n) {
   const arr=[];
    for(i=0; i<n; i++){
    i%2==0? arr.push('수') : arr.push('박')       
   }
    return arr.join('')
}