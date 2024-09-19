function solution(balls, share) {
    const top = Array(share).fill(balls).reduce((a,c,i)=> a*(c-i), 1);
    const bottom = Array(share).fill(share).reduce((a,c,i)=> a*(c-i), 1);
    return top/bottom
}