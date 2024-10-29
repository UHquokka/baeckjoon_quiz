function solution(arr, queries) {
   queries.forEach(v=>{
       const [s, e] = v;
       arr = arr.map(((n, i)=> (i>=s && i<=e)? n+1 : n))
   })
    return arr
}