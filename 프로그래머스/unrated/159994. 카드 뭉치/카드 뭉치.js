function solution(cards1, cards2, goal) {
    // cards1 = cards1.filter(word => goal.includes(word))
    // cards2 = cards2.filter(word => goal.includes(word));
    // console.log("card1 & 2", cards1, cards2)
    // console.log(goal)
    let rmCount = 0;
    goal.map((word) => {
        if (cards1[0] === word) {
            rmCount += 1;
            cards1.splice(0, 1);
        } else if (cards2[0] === word) {
            rmCount += 1;
            cards2.splice(0, 1);
        } else {
            return;
        }
    })
    return rmCount === goal.length ? "Yes" : "No"
}