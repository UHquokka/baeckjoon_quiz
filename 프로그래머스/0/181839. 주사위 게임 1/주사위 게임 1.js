function solution(a, b) {
    const isOdd = (num)=>{
       return num%2 == 1 ? true : false
    }
    if(isOdd(a) && isOdd(b)) return (a**2)+(b**2)
    if(isOdd(a) || isOdd(b)) return 2*(a+b)
    if(!(isOdd(a) && isOdd(b))) return Math.abs(a-b)
}