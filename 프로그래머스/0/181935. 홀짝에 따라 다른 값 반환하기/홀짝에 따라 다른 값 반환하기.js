function solution(n) {
    const arr = [];
 for(i=1; i<=n; i++){
     if(n%2 == 1){
         i%2==1 && arr.push(i) 
     }
     if(n%2 == 0){
         i%2==0 && arr.push(i**2) 
     }
 }
    return arr.reduce((a, c)=>a+c)
}