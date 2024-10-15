function solution(numLog) {
   const cal = {
    [+1]: "w", [-10]:"a", [-1]:"s", [10]:"d"
   }
   let answer = '';
    for(i=1; i<numLog.length; i++){
        answer += cal[numLog[i]-numLog[i-1]]
    }
    return answer
   }