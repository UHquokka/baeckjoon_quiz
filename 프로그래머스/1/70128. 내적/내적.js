function solution(a, b) {
   let dp = 0;
    for(i=0; i<a.length; i++){
        dp += a[i]*b[i]
    }
    return dp;
}