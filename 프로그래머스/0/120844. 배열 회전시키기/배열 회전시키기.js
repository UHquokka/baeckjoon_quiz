function solution(numbers, direction) {
    const answer = [];
    for(i=0; i<numbers.length; i++){
        if(direction == "right"){
            answer[(i+1)%numbers.length] = numbers[i];  
        }
         if(direction == "left"){
            answer[(i-1+numbers.length)%numbers.length] = numbers[i];  
        }
    }
    return answer
}