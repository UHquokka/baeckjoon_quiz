function gcd(a, b) {
  if (a % b === 0) return b; 
  return gcd(b, a % b); 
}
function solution(n) {
const min = gcd(Math.max(6, n), Math.min(6, n));
return n/min
}