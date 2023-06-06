function solution(food) {
    const arr = food.map((v, i) => {
        const count = Math.floor(v / 2);
        return new Array(count).fill(i);
    }).flat();
    return arr.join("") + "0" + arr.reverse().join("");
}