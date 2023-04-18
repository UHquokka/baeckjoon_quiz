function solution(sides) {
    let count = [];
    for (let i = 1; i < sides[0] + sides[1]; i++) {
        let tri = sides.map(v => v);
        tri.push(i);
        tri.sort((a, b) => a - b);
        tri[0] + tri[1] > tri[2] && count.push(tri);
    };
 return count.length;
}