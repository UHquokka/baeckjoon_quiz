function solution(num, k) {
  return (num+'').includes(k) ? (num+'').indexOf(k) +1 : -1
}