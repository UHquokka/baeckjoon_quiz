function solution(emergency) {
    const originalE = emergency.map(v => v);

    emergency.sort((a, b) => b - a);
    let orderMap = new Map();
    for (let i = 0; i < emergency.length; i++) {
        orderMap.set(emergency[i], i + 1);
    }
    return originalE.map(v => orderMap.get(v));
}