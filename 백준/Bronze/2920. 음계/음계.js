let input = require('fs').readFileSync('./dev/stdin').toString().trim().split("\n").map(v => v.replace("\r", ""));

const arr = input[0].split(" ").map(Number);
const compareItems = (array, array2) => {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) {
            result = false;
            break;
        }
    }
    return result;
}

if (Math.max(...arr) === arr[0]) {
    const des = [...arr].sort((a, b) => b - a);
    console.log(compareItems(arr, des) ? 'descending' : 'mixed')
} else if (Math.min(...arr) === arr[0]) {
    const asc = [...arr].sort((a, b) => a - b);
    console.log(compareItems(arr, asc) ? 'ascending' : 'mixed')
} else {
    console.log("mixed");
}
