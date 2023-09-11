function solution(arr)
{
    const answer = [];
    arr.map((v, i)=>{
        i===0 && answer.push(v)
        if(i>0){
            if(arr[i-1] !== v) {answer.push(v)}        
        }
    })

return answer;
}