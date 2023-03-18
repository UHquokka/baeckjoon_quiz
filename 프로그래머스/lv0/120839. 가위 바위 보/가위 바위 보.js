
function solution(rsp) {
    return rsp.split("").map(i => i === "2" ? "0" : (i === "5" ? "2" : "5")).join("");

}
