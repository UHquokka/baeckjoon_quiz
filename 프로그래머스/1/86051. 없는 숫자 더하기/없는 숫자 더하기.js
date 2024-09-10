function solution(numbers) {
  const all =[1, 2, 3,4, 5, 6, 7, 8, 9, 0];
   return all.filter(v=> !numbers.includes(v)).reduce((a,b)=> a+b, 0)
}