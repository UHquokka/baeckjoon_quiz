function solution(my_string) {
  return my_string.replaceAll(/[a-z, A-Z]/g, ",").split(',').filter(v=> v!='').reduce((a,c)=> Number(a)+Number(c), 0)
}