function solution(numbers) {
    let sums = [];
    numbers.map((v, i) =>
        numbers.map((v1, i1) =>
            i !== i1 && !sums.includes(v + v1) && sums.push(v + v1)))
   return sums.sort((a, b)=> a - b);
}