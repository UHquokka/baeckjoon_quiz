function solution(A, B) {
    if(A==B) return 0
    let arrA = [...A];
    for(i=1; i<A.length; i++){
        arrA.unshift(arrA.pop());
        if(arrA.join("") == B) return i
    }
    return -1
}