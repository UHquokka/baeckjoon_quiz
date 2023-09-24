function solution(sizes) {
const ver = [];
    const hor = [];
    sizes.map(size=>{
    ver.push(Math.max(size[0], size[1]));
        hor.push(Math.min(size[0], size[1]));
})
return Math.max(...ver)*Math.max(...hor)

}