function solution(array) {
    return array.join('').length- array.join('').replaceAll('7', "").length
}