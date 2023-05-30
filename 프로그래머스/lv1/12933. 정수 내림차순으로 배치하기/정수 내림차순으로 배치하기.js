function solution(n) {
    let nums = [];
    while (n >= 1) {
        nums.push(n % 10)
        n = Math.floor(n / 10);
    }
     return Number(nums.sort((a, b) => b - a).join(""))

}