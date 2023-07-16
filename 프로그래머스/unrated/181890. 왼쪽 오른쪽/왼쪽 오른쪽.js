function solution(str_list) {

    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") {
            return i === 0 ? [] : str_list.slice(0, i);
        }
        if (str_list[i] === "r") {
            return i === str_list.length - 1 ? [] : str_list.slice(i+1);
        }
    }
    return [];
}