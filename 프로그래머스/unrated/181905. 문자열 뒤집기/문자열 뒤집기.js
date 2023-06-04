function solution(my_string, s, e) {
    let arr = [...my_string];
    let lump = [...my_string].slice(s, e + 1).reverse();
    arr.splice(s, e - s + 1, ...lump);
    return arr.join("")
}