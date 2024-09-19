function solution(num_list, n) {
    const answer = [];
    const arr = [];
    num_list.map((v, i)=> {
            arr[i%n] = v;
         if(i%n == n-1){
             answer.push([...arr]);
        }
    })
    return answer
}