function solution(numlist, n) {
    const result = numlist.sort((a, b) => b - a).sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
   return result;
}