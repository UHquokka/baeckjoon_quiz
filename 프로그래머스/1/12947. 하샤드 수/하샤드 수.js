function solution(x) {
    //1. x 의 자리수의 합 구하기
    //2. x 가 자리수의 합으로 나눠떨어지는지 봐야 함. 
   const sum = [...(x+'')].reduce((a, b)=> Number(a)+Number(b), 0);
    return x%sum === 0? true : false
}