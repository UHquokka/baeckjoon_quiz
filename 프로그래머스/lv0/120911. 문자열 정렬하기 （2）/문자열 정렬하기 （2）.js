function solution(my_string) {
    const sortArr = my_string.toLowerCase().split("").sort();
    return sortArr.join().replaceAll(',', '');
}