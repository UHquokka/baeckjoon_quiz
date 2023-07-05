function solution(picture, k) {
    const result = picture.flatMap(line => new Array(k).fill([...line].map((string) => new Array(k).fill(string).join("")
    ).join("")))
    return result;
}