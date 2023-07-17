function solution(participant, completion) {
    const pCount = {};
    participant.map(v => pCount[v] = 0)
    participant.map(v => pCount[v]++)

    const cCount = {};
    completion.map(v => cCount[v] = 0)
    completion.map(v => cCount[v]++)

    for (const name of Object.keys(pCount)) {
        if (!cCount[name]) return name;
        if (cCount[name] !== pCount[name]) return name;
    }

}
