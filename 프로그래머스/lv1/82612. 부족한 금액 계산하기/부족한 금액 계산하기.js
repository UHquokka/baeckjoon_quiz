function solution(price, money, count) {
    let nowPrice = 0;
    for (let i = 1; i <= count; i++) {
            nowPrice += i * price
    }
    return nowPrice - money > 0 ? nowPrice - money : 0;
}
