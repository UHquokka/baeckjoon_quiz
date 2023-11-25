function solution(n, arr1, arr2) {
  const changeToArray = (arr) => {
    const newArr = arr.map((v) => {
      const string = v.toString(2).split('');
      while (string.length < arr1.length) {
        string.unshift('0');
      }
      return string;
    });
    return newArr;
  };
  arr1 = changeToArray(arr1);
  arr2 = changeToArray(arr2);

  const finalArray = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][j] == 1 || arr2[i][j] == 1) {
        finalArray[i][j] = "#";
      } else {
        finalArray[i][j] = " ";
      }
    }
  }
  return finalArray.flatMap(v=> v.join(""));
}
