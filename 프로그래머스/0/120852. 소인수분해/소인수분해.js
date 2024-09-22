const isPrime = (n)=>{
    const ms = [];
    for(i=1; i<=n; i++){
        if(n%i === 0) ms.push(i)
    }
    return ms.length == 2 ? true : false
} 
function solution(n) {
    const ms =[];
    for(i=2; i<=n; i++){
        if(n%i == 0){
            ms.push(i)                
        }
    }
   return ms.filter(v=> isPrime(v))
}