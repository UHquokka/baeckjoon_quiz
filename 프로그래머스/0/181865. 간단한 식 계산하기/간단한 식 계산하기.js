function solution(binomial) {
    const arr = binomial.split(' ');
    if(arr[1] == '*') return Number(arr[0])*Number(arr[2])
    if(arr[1] == '+') return Number(arr[0])+Number(arr[2])
    if(arr[1] == '-') return Number(arr[0])-Number(arr[2])
}