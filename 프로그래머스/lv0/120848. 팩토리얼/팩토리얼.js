function solution(n) {
    let fac = 1;
    let num = 0;
    while (fac <= n) {
        num++;
        fac = fac * num;
    }
    return num-1;
}