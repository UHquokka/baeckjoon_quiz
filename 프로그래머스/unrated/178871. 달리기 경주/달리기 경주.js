function solution(players, callings) {
    const order = new Map();
    players.forEach((name, index) => {
        order.set(name, index);
    })
    callings.forEach(call => {
        const callIndex = order.get(call)
        const fall = players[callIndex - 1];
        players[callIndex] = fall;
        players[callIndex - 1] = call;
        order.set(call, order.get(call) - 1);
        order.set(fall, order.get(call) + 1);
    });
    return players
}