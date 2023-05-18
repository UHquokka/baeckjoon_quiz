function solution(num_list) {
    const last = num_list.length - 1;
    num_list[last] > num_list[last - 1] ? num_list.push(num_list[last] - num_list[last - 1]) : num_list.push(num_list[last] * 2)
    return num_list;
}