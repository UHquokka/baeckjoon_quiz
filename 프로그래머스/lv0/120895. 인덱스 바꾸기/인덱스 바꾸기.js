function solution(my_string, num1, num2) {
    const num11 = [...my_string][num1];
    const num22 = [...my_string][num2];
    let resultAyy = [...my_string];
    resultAyy[num1] = num22;
    resultAyy[num2] = num11;
   return resultAyy.join("");
}