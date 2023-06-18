function solution(k, score) {

    let low = [];
    let arr = new Array(k).fill(score[0]);
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            arr[i] = score[i]
            low.push(Math.min(...arr))
        } else {
            arr.push(score[i])
            arr.sort((a, b) => a - b)
            arr.shift()
            low.push(Math.min(...arr))
        }
    }
    return low;
}