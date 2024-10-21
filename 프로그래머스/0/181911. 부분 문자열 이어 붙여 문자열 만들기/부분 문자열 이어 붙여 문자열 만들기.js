function solution(my_strings, parts) {
  return parts.reduce((a, c, i)=>{
     return a + my_strings[i].slice(c[0], c[1]+1)
   },'')
}