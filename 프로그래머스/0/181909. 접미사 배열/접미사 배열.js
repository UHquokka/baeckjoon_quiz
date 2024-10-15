function solution(my_string) {
    const answer = [];
    for(i=0; i<my_string.length; i++){
    answer.push(my_string.slice(i))
    }
    return answer.sort()
}