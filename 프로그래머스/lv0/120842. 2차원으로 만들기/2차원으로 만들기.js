
function solution(num_list, n) {
    let resultArr = [];
    for (let k = 0; k <=  num_list.length - 1; k += n) {
        let newArr = num_list.slice(k, k + n);
        resultArr.push(newArr);
    }
return resultArr;
}