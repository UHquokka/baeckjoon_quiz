function solution(lines) {
    const mark = new Array(200);
    lines.forEach(line=> {
        for(i=line[0]+100; i<line[1]+100; i++){
            mark[i] = mark[i] !== undefined ? mark[i]+1 : 0
        }
    })
    return mark.filter(v=> v).length
}