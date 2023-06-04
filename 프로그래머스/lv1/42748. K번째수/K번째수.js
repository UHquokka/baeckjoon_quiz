function solution(array, commands) {
    let result = [];
    for (let v = 0; v < commands.length; v++) {
        let [i, j, k] = commands[v];
        result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    }
    return result
}