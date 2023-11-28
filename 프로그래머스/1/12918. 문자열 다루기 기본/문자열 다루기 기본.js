function solution(s) {
  let result = true;
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  }
  for (const char of s) {
    console.log(+char, char);
    if (+char != char) {
      result = false;
      break;
    }
  }
  return result;
}
