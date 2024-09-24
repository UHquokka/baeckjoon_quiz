function solution(numbers) {
    const eng =["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let answer = numbers;
    for(i=0; i< eng.length; i++){
       answer= answer.replaceAll(eng[i], num[i])
    }
    return BigInt(answer)
}