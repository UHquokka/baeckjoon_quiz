function solution(numer1, denom1, numer2, denom2) {
    const sumNumer= numer1*denom2+numer2*denom1;
    const sumDenom = denom1*denom2;
    for(i=Math.min(sumNumer, sumDenom); i>=1; i--){
        if(sumNumer%i ==0 && sumDenom%i == 0){
            return [sumNumer/i, sumDenom/i]
        }
    }
}