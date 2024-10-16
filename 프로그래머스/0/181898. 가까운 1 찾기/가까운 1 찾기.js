function solution(arr, idx) {
   let big = -1;
  for(i=idx; i<arr.length; i++){
      if(arr[i]===1 && i>=idx) {
          big = i;
          break;
      }
  }
    return big
}