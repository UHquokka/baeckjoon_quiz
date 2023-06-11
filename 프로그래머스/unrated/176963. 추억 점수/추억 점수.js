function solution(name, yearning, photos) {
    const obj = name.reduce((acc, cur, i) => ({ ...acc, [cur]: yearning[i] }), {});
    let count = [];
    for (let i = 0; i < photos.length; i++) {
        let sum = photos[i].reduce((acc, cur) => acc + (obj[cur] ? obj[cur] : 0), 0)
        count.push(sum)
    }
    return count;
}