function solution(chicken) {
    let free = 0;
    while (chicken >= 10) {
        free += Math.floor(chicken / 10);
        chicken = chicken % 10 + Math.floor(chicken / 10);
    }
return free;
}