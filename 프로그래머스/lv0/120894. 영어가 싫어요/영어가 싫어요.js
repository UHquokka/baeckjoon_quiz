function solution(numbers) {
    var answer = 0;
    const en = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 };
    const keys = Object.keys(en);
    for (let i = 0; i < keys.length; i++) {
        numbers = numbers.replaceAll(keys[i], en[`${keys[i]}`]);
    }
    return Number(numbers);
}