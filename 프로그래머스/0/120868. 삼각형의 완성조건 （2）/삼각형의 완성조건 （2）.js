function solution(sides) {
    const [side1, side2] = sides;
    let count = 0;
    for(i=1; i<= 2000; i++){
     const arr = [side1, side2, i].sort((a, b)=> a-b);
        if(arr[0]+arr[1]>arr[2]) {
            console.log(arr)
            count++;
        }
    }
    return count
}