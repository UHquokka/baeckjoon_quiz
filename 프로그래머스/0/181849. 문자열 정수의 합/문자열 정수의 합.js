function solution(num_str) {
    return [...num_str].reduce((a, c)=> Number(a)+Number(c)) 
}