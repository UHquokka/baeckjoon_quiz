function solution(s) {
    const arr = s.split(' ');
    let sum = 0;
    arr.map((v, i)=>{
        if(v == "Z"){
            sum -= Number(arr[i-1])
        } else{
            sum += Number(v)
        }
    })
    return sum
}