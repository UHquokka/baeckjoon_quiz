process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //개 만큼의 *을 만든다.
    //만든 a 를 b 만큼 출력한다.
    let letterA = '';
    for(i=0; i<a; i++){
        letterA += '*' 
    }
    for(i=0; i<b; i++){
console.log(letterA)
    }
});