function solution(s) {
    const sArr = s.split(" ");
    const removeZArray = sArr.map((v, i) => v === "Z" ? Number(v.replace("Z", -sArr[i - 1])) : Number(v));
    return removeZArray.reduce((sum, cur) => sum + cur);
}