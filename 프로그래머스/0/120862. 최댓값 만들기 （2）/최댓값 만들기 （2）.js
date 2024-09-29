function solution(numbers) {
  const sorted= numbers.sort((a, b)=> a-b);
    const num1 =sorted[0]*sorted[1];
    const num2 = sorted[sorted.length-2]*sorted[sorted.length-1];
    return Math.max(num1, num2)
   }