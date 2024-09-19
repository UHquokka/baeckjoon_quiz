function solution(n) {
   const m = [];
    for(i=1; i<=n; i++){
       if(n%i === 0) m.push(i)
   }
    return m.length
}