function solution(myString) {
    const arr = myString.split("");
    const beforeL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    return arr.map(v => beforeL.includes(v) ? "l" : v).join("")
}
