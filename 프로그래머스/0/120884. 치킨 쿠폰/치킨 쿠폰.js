function solution(chicken) {
    let sum = 0;
    let free = Math.floor(chicken/10);
    while(free + chicken >= 10){
        sum += free
        chicken = free + chicken%10;
        free = Math.floor(chicken/10);
    }
    return sum
}