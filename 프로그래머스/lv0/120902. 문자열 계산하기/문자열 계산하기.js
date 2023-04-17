function solution(my_string) {
    const arr = my_string.split(" ");
    let result = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            result += Number(arr[i + 1]);
        }
        if (arr[i] === "-") {
            result -= Number(arr[i + 1]);
        }
    }
 return result;
}