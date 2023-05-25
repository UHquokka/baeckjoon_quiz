function solution(num_list, n) {
    const cut = num_list.splice(0, n);
   return num_list.concat(cut);
}