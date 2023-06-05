function solution(food) {
    let oneCount = [];
    food.map((v, i) => i > 0 && oneCount.push(Math.floor(v / 2)))
    const arr = oneCount.map((v, i) => new Array(v).fill(i + 1)).flat();
    const rev = [...arr].reverse().join("");
    return arr.join("") + "0" + rev;
}