function solution(arr) {
  let X = '';
    arr.forEach(v=>{
       X += (v+' ').repeat(v)
    })
    return X.trim().split(' ').map(v=> Number(v))
}