function solution(my_string) {
    const arr = my_string.split(' ');
    let answer = Number(arr[0]);
    for(i=1; i<arr.length; i++){
        if(arr[i] == '+'){
            answer += Number(arr[i+1])
        }
        if(arr[i] == '-'){
            answer -= Number(arr[i+1])
        }
    }
    return answer
}