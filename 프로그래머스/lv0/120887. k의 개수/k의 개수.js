function solution(i, j, k) {
    let range = [];
    for (let index = i; index < j + 1; index++) {
        range.push(index);
    }
    const string = range.join("");
    const minus = string.replaceAll(k, "");
 return string.length - minus.length;
}