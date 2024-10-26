function solution(str1, str2) {
    const arr1 = [...str1];
    const arr2 = [...str2];
    let answer = '';
    for(i=0; i<arr1.length; i++){
    answer+= arr1[i]+arr2[i]
}
    return answer
}