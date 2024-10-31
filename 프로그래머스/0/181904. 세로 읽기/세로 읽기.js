function solution(my_string, m, c) {
    let answer = '';
 [...my_string].forEach((v,i)=> {
        if(i%m == (c-1)){
           answer = answer + v;
        }})
    return answer
}