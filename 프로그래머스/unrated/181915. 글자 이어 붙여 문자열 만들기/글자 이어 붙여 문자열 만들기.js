function solution(my_string, index_list) {
    let result = "";
    index_list.map(v => {
        result += my_string[v];
    })
    return result
}