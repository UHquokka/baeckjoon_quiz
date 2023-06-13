function solution(a, b) {
    const date = new Date(2016, a-1, b);
   return date.toDateString().slice(0, 3).toUpperCase()
}