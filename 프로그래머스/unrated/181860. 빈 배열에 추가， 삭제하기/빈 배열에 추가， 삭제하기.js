function solution(arr, flag) {
    let answer = "";
    flag.map((v, i) => {
        v ? answer += (arr[i] + "").repeat(arr[i] * 2) : answer = answer.slice(0, answer.length - arr[i])
    });
    return answer.split("").map(Number)
}