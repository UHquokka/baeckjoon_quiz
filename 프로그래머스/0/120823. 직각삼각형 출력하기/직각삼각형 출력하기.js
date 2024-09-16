const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = '';
    for(i=0; i<input[0]; i++){
        result += '*';
            console.log(result)
    } 
});