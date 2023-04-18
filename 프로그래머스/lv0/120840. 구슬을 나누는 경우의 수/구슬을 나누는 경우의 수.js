function solution(balls, share) {
    let allP = 1;
    let shareP = 1;
    for (let i = 0; i < share; i++) {
        allP *= (balls - i);
        shareP *= (share - i);
    }
  return allP/shareP;
}