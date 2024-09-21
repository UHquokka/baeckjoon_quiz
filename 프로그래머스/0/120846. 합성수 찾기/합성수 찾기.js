function solution(n) {
    let count = 0;
    for(i=1; i<=n; i++){
     let ms = 0;
        for(k=1; k<=i; k++){
        if(i%k == 0) ms++;    
        }
    ms >2 && count ++;
    }
    return count
}