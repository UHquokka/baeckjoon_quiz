function solution(s) {
    const middleI = Math.floor(s.length/2);
    if(s.length%2 == 1){
        return s.at(middleI)
    } else{
        return s.at(middleI-1)+""+ s.at(middleI)
    }
}