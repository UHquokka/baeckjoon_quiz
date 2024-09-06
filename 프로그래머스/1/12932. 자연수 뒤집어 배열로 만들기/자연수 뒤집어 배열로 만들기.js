function solution(n) {
    const arr = [...n.toString()];
    const answer = [];
    for(i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]))
    }
    return answer
    }