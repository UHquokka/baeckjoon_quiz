function solution(n) {
  const m = [];
  for(i=1; i<=n; i++){
      n%i == 0 && m.push(i)
  }
    return m
}