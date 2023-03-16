
function solution(array, height) {
    array.push(height);
    array.sort((a, b) => a - b);
    const tall = array.filter(i => i > height);
    return tall.length;
}