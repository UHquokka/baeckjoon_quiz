function solution(order) {
    return order.reduce((acc, choice) => choice.includes("cafelatte") ? acc + 5000 : acc + 4500, 0);
}