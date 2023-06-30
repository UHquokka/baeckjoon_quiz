function solution(arr) {
    let row = arr.length;
    let column = arr[0].length;
    if (row === column) return arr;
    if (row > column) {
        arr.map(miniArr => {
            for (let i = column; i < row; i++) {
                miniArr.push(0)
            }
        })
    } else {
        const zeroArr = new Array(column).fill(0);
        for (let i = row; i < column; i++) {
            arr[i] = zeroArr
        }
    }
    return arr;
}