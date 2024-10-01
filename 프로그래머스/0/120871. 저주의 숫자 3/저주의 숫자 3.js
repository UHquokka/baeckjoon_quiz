function solution(n) {
   const three = [];
    for(i=1; i<200; i++){
        if(!(i%3 == 0 || i.toString().includes('3'))){
        three.push(i)
        }
    }
    return three[n-1]
    
}