function solution(my_str, n) {
    let result = [];
    while (my_str) {
        let lump = my_str.slice(0, n)
        result.push(lump);
        my_str = my_str.replace(lump, "");
    }
    return result;
}