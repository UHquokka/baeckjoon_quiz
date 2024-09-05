function solution(arr) {
   //평균값 : 모든 수를 더해서 수의 갯수만큼 나눈 값
    let sum = 0;
    arr.map(i => sum = i+sum);
    return sum / arr.length;
}