function solution(order) {
   return (order+'').replace(/[^369]/g, "").length
}