function solution(my_string, indices) {
    const strArr = my_string.split("")
    indices.map(num => strArr[num] = "")
    return strArr.join("")
}