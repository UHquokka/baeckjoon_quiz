function solution(numbers, n) {
    let sum = 0;
    for (let j = 0; sum <= n; j++) {
        sum += numbers[j];
    }
  return sum;
}