const isLimit = (num)=>{
    const measure = [];
    let i= 2;
    while(num !== 1){
        if(num%i == 0){
            measure.push(i);
            num = num/i;
        } else{
            i++
        }}
        return measure.filter(v=> v !== 2).filter(v=> v!==5).length>0 ? 2: 1
    }

function solution(a, b) {
    let [aa, bb] = [a, b];
    for(i=2; i<= Math.min(a, b); i++){
        if(aa%i == 0 && bb%i == 0){
            aa = aa/i;
            bb = bb/i;
        }
    }
    return isLimit(bb)
}