function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    for (let i = 0; i < babbling.length; i++) {
        words.map(word => {
            babbling[i] = babbling[i].replace(String(word), " ");
        })
    }
    babbling.map(v => v.replaceAll(" ", "") === "" && count++)
    return count;
}