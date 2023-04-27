function solution(score) {
    let avr = [];
    for (let i = 0; i < score.length; i++) {
        avr.push(score[i].reduce((sum, cur) => sum + cur) / 2)
    }
    const sortArr = avr.map(v => v).sort((a, b) => b - a);
    let index = [];
    for (let i = 0; i < avr.length; i++) {
        index.push((sortArr.findIndex(v => v == avr[i]) + 1)
        )
    }
    return index;
}