function solution(n) {
    if(n === 0) return 0
    return [...(n+'')].reduce((a,c)=> Number(a)+Number(c))
}