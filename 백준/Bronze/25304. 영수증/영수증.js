let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const sum = +input[0];
const kinds = +input[1];

let itemPrice = 0;
for (let i = 2; i <= kinds + 1; i++) {
    //품목을 받아온다. 
    const item = input[i].split(" ");
    //각 품목에서 가격과 개수를 구분한다.
    const price = item[0];
    const quantity = item[1];
    //가격과 개수를 곱한다. 나온 가격과 개수를 모두 더한다.
    itemPrice = itemPrice + (price * quantity);
}
//영수증의 sum 과 맞는지 확인 & 일치하면 Yes, 일치하지 않는다면 No를 출력한다.
console.log(itemPrice === sum ? "Yes" : "No")

