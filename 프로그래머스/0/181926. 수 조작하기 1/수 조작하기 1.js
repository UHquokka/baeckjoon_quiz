function solution(n, control) {
    [...control].forEach(v=> {
       if(v == 'w') n += 1;
       if(v == 's') n -= 1;
       if(v == 'd') n += 10;
       if(v == 'a') n -= 10;
   })
    return n
}