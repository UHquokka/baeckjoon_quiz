function solution(s) {
    const set = new Set(s);
    return [...[...set].reduce((c, a)=> 
        s.length- s.replaceAll(a, '').length === 1 ? c+a : c+'' ,'')].sort().join('')
}