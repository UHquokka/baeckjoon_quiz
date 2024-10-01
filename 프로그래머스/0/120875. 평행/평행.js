function solution(dots) {
    const xArr = [...dots].sort((a, b)=>a[0]-b[0]);
    const yArr = [...dots].sort((a, b)=>a[1]-b[1]);
    const xLean1 = (xArr[1][0]-xArr[0][0]) / (xArr[1][1]-xArr[0][1]);
    const xLean2 = (xArr[3][0]-xArr[2][0]) / (xArr[3][1]-xArr[2][1]);
    const yLean1 = (yArr[1][0]-yArr[0][0]) / (yArr[1][1]-yArr[0][1]); 
    const yLean2 = (yArr[3][0]-yArr[2][0]) / (yArr[3][1]-yArr[2][1]);
    return xLean1 == xLean2 || yLean1 == yLean2 ? 1 : 0
}