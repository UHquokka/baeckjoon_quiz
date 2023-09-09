function solution(n, m) {
//최대공약수 : 구한 약수 중에 가장 큰 수 -> 나눠서 나머지가 0인 수 중에 가장 큰 수
    //최소공배수 : 두 수를 곱한 후 최대공배수로 나눈 수
    const mesures = [];
    for(i=1; i<=Math.min(n, m); i++){
        if(n%i=== 0 && m%i === 0) mesures.push(i)
    }
    const maxMeasure = Math.max(...mesures);
    const minDrainger = n*m/maxMeasure;
    return [maxMeasure, minDrainger]
}