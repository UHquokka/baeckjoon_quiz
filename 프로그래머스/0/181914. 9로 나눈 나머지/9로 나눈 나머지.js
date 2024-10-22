function solution(number) {
    return [...number].reduce((a,c)=> Number(a) + Number(c), 0)%9
}