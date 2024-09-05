function solution(s){
const chars = s.split('').map(v=> v.toLowerCase());
    let countP = 0;
    let countY = 0;
    chars.map(v=> {
        v==='p' && countP++;
        v==='y' && countY++;
    } )
    if(countP === 0 && countY === 0){
        return true 
    } else{
        return countP===countY ? true :false
    }
}