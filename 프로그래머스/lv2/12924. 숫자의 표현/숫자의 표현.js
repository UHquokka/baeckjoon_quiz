function solution(n) {
    let count = 1;
    if (n == 1) {return 1}
   
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        let sum = 0;
        let start = i;
        while (sum < n) {
            sum += start;
            if (sum === n) count++;
            start++;
        }
    }
    return count;
}
