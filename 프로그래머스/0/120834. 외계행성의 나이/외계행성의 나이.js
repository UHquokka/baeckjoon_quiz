function solution(age) {
  const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return [...(age+'')].map(v=> char[v]).join('')
}