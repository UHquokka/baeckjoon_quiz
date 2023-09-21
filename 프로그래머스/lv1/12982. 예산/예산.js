function solution(d, budget) {
d.sort((a, b)=> a-b)
    let count = 0;
    let sum = 0;
    for(i=0; i<d.length; i++){
       sum += d[i];
        count++;
        console.log(i, sum, budget)
        if(sum === budget) {return count}
        if(sum > budget) {return count-1}
    }
return count
    
}