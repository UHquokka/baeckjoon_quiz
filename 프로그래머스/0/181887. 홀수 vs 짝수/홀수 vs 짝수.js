function solution(num_list) {
    const arr1 = [];
    const arr2 = [];
    num_list.map((v, i)=> {
        i%2== 0? arr1.push(v) : arr2.push(v)
    })
    return Math.max(arr1.reduce((a, c)=> a+c), arr2.reduce((a, c)=> a+c))
}