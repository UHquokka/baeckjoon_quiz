function solution(n) {
    let fac = 1;
    const arr =[];
    for(i=1; i<=n; i++){
        fac *= i;
        if(fac>n){
            break;
        }else {
            arr.push(i)
        }
    }
    return arr[arr.length-1]
}