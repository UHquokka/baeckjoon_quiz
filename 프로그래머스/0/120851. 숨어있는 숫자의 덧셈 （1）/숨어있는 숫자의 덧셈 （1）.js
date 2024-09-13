function solution(my_string) {
return    [...my_string].filter(v=> Number(v)).reduce((ac, cur)=> Number(ac) + Number(cur),0)
}