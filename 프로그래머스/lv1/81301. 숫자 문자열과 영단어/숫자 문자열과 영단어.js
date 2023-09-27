function solution(s) {
    const numChart = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    let word = '';
    return Number([...s].map(char => {
        if (char == Number(char)) {
            return char;
        } else {
            word += char;
            const number = numChart[word];
            if (number || number === 0) {
                word = "";
                return number
            }
        }
    }).join(""))
}
