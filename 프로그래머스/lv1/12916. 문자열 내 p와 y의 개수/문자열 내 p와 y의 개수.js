function solution(s) {
    const count = { p: 0, y: 0 };
    for (const char of s.toLowerCase()) {
        char === 'p' && count.p++;
        char === 'y' && count.y++;
    }
    return count.p === count.y || (count.p === 0 && count.y === 0) ? true : false;
}