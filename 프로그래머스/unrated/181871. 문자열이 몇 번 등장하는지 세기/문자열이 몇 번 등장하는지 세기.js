function solution(myString, pat) {
    const result = [...myString].reduce((acc, cur, ind) => {
        const conStr = myString.slice(ind, pat.length + ind)
        return conStr === pat ? acc + 1 : acc;
    }, 0);
    return result;
}