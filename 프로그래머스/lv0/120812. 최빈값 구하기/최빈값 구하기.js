function solution(array) {
    const set = new Set(array);
    const map = new Map([...set].map(v => [v, 0]));
    array.map(v => map.has(v) && map.set(v, map.get(v) + 1))
    const countArr = [...map.values()];
    let resultArr = [];
    let maxNum = Math.max(...map.values());
    for (let i = 0; i < countArr.length; i++) {
        maxNum === countArr[i] && resultArr.push(countArr[i])
    }
    const index = countArr.findIndex(v => v === maxNum);
    return resultArr.length > 1 ? -1 : [...map.keys()][index];
}