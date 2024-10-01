function solution(spell, dic) {
 return dic.filter(word => [...word].sort().join("") == spell.sort().join("")).length > 0 ? 1 : 2
}