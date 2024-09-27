const cal = (ex)=>{
    const arr = ex.split(' '); 
    let sum = 0;
    if(arr[1] == '+'){
     sum = Number(arr[0])+Number(arr[2])
        }
    if(arr[1]== '-'){
     sum = Number(arr[0])-Number(arr[2])
        }
    console.log(arr[arr.length-1],sum)
   return arr[arr.length-1] == sum ? "O" : "X" 
}
function solution(quiz) {
   return quiz.map(v=> cal(v))
}