function solution(my_string, num1, num2) {
    const arr = [...my_string];
    const char1 = arr[num1];
    const char2 = arr[num2];
    arr[num2] = char1;
    arr[num1] = char2;
    return arr.join('')
}