function solution(emergency) {
  const ordered = [...emergency].sort((a, b)=> b-a);
    const answer = [];
  emergency.map(v=> 
    answer.push( ordered.indexOf(v)+1)
    )   
    return answer
}