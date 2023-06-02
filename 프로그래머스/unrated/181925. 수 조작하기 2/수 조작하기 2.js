function solution(numLog) {
    let numString = ""
    for (let i = 0; i < numLog.length - 1; i++) {
        const gap = numLog[i + 1] - numLog[i]
        if (gap === 1) numString += "w";
        if (gap === -1) numString += "s";
        if (gap === 10) numString += "d";
        if (gap === -10) numString += "a";
    }
    return numString;
}