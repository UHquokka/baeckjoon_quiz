function solution(arr1, arr2) {
  if(arr1.length !== arr2.length){
      return arr1.length > arr2.length ? 1 : -1
  }
    if(arr1.length == arr2.length){
        const arr1Sum = arr1.reduce((a, c)=> a+c);
        const arr2Sum = arr2.reduce((a, c)=> a+c);
        if(arr1Sum == arr2Sum) return 0;
        return arr1Sum < arr2Sum ? -1 : 1
    }
}