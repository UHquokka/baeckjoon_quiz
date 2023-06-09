function solution(myString, pat) {
    if (myString.endsWith(pat)) return myString;
    let string = [...myString].join("");

    while (string.endsWith(pat) !== true) {
        string = string.slice(0, -1)
    }
    return string;
}