function solution(dots) {
    let xLength = 0;
    let yLength = 0;
    dots.map(v => dots[0][0] === v[0] ? yLength = dots[0][1] - v[1] : v);
    dots.map(v => dots[0][1] === v[1] ? xLength = dots[0][0] - v[0] : v);

    xLength = xLength < 0 ? -xLength : xLength;
    yLength = yLength < 0 ? -yLength : yLength;

    return xLength * yLength;
}