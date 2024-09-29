function solution(my_str, n) {
    const arr = [...my_str];
    const answer = [];
    while(arr.length > 0){
      answer.push(arr.splice(0, n).join(''))
    }
    return answer
}