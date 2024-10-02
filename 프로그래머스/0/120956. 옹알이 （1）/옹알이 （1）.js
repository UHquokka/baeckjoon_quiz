function solution(babbling) {
   const words = ["aya", "ye", "woo", "ma"];
   return babbling.reduce((a, c)=>{
       words.forEach((w)=>{
           c = c.replace(w, ' ')
       })
       console.log(c)
     return c.replaceAll(' ', '').length === 0 ? a+1 : a+0
    }, 0)
}