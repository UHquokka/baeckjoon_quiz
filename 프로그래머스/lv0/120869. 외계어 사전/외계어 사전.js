function solution(spell, dic) {
    let notMatchWords = [];
    dic.map(word => {
        let notMatch = 0;
        let wordArr = word.split("").map(v => v);
        spell.forEach(v => { wordArr.includes(v) || notMatch++ });
        if (notMatch === 0) {
            notMatchWords.push(word);
        }
    })
    if (notMatchWords.length > 0) {
        return 1;
    } else {
        return 2;
    }
}