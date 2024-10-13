function solution(names) {
    const answer = [];
    names.map((v, i)=>{
        if(i%5 === 0) answer.push(v)
    })
    return answer;
}