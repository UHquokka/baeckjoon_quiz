function solution(array) { 
    if(array.length == 1){
        return array[0]
    } else{
   const mapList = new Map();
    array.map(v=> {
        mapList.has(v) ? mapList.set(v, mapList.get(v)+1) :mapList.set(v, 1);
    });        
        const keys = [...mapList.keys()];
    const count = [...mapList.values()];
        const biggest = Math.max(...count);
        return count.filter(v=> v == biggest).length >1 ? -1 : keys[count.indexOf(biggest)]
    }
}