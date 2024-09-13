function solution(rsp) {
    //가위 2 -> 0
    //바위 0 -> 5
    //보 5 -> 2
    return [...rsp].map(v=> v== 2? 0 : v==0? 5 : 2).join('');
}