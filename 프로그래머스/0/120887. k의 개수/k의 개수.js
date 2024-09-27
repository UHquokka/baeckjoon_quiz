function solution(i, j, k) {
    let count = 0;
    for(c=i; c<=j; c++){
      count += (c+'').length - (c+'').replaceAll(k+'', '').length;
    }    
    return count
}