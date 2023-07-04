function solution(n, m, sections) {
    let allSection = new Array(n + 1).fill(0);
    Array.from(sections, x => allSection[x] = -1);

    let count = 0;
    sections.map(s => {
        if (allSection[s] === -1) {
            count++;
            for (let i = s; i < s + m; i++) {
                allSection[i] += 1;
            };
        }
    })
    return count;
}