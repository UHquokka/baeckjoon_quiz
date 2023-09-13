function solution(s) {
 return s.split(" ").map(word=>{
return     [...word].map((char, i)=>{
      if(i%2!==0){
          return char.toLowerCase()
      }
      if(i%2===0){
          return char.toUpperCase()
      }
  }).join("") 
 }).join(" ")
}