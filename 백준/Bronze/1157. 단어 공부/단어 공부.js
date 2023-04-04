const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll("\r" && "\n", "").toUpperCase().split("");

let countArr = [];
const inputSet = new Set(input);
const onlyItem = [...inputSet];
onlyItem.map(v => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        v === input[i] && count++;
    }
    countArr.push({ [v]: count });
})

let num = [];
for (let i = 0; i < countArr.length; i++) {
    num.push(...Object.values(countArr[i]));
} //num [ 1, 4, 4, 1 ]
const max = Math.max(...num);
let maxcount = 0;
num.map(v => v === max && maxcount++); //max가 1개 이상인지 파악하기

const findLetter = () => {
    countArr.map(v => Object.values(v)[0] === max && console.log(...Object.keys(v)));
}
maxcount > 1 ? console.log('?') : findLetter();
