function solution(absolutes, signs) {
  let count = 0;
    for(i=0; i<signs.length; i++){
    count += (signs[i] ? absolutes[i] : -absolutes[i])
  }
    return count
}