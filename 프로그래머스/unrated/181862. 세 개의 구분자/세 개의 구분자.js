function solution(myStr) {
    let arr = [];
    myStr.split("a").join("!").split("b").join("!").split("c").join("!").split("!").map(v => v !== "" && arr.push(v));
   return arr.length === 0 ? ["EMPTY"] :[...arr];
    
}
