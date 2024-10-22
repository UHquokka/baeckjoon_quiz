function solution(arr, intervals) {
   return intervals.reduce((a, c)=>{
      return  [...a, ...arr.slice(c[0], c[1]+1)]
    }, [])
}