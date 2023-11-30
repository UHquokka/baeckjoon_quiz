function solution(s, skip, index) {
  const origin = [];
  for (let i = 97; i < 123; i++) {
    origin.push(String.fromCharCode(i));
  }
  const table = origin.filter((v) => ![...skip].includes(v));
  return [...s]
    .map((char) => {
      return table[(table.findIndex((v) => v == char) + index) % table.length];
    })
    .join('');
}