function solution(dots) {
    const xs = [];
    const ys = [];
    for(i=0; i<dots.length; i++){
        xs.push(dots[i][0]);
        ys.push(dots[i][1]);
    }
    const xLength = Math.max(...xs)-Math.min(...xs);
    const yLength = Math.max(...ys)-Math.min(...ys);
   return xLength*yLength
}