function solution(n) {
    let range = [];
    let i = 1;
    while (range.length < n) {
        i % 3 !== 0 && !String(i).includes('3') && range.push(i);
        i++;
    }
  return range.pop();
}