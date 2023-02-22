let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const currentTime = input[0].split(" ").map(Number);
const currentTimeH = currentTime[0] == 0 ? 24 : currentTime[0];
const currentTimeM = currentTime[1];
const cookingTime = Number(input[1]);
const afterCooking = currentTimeH * 60 + currentTimeM + cookingTime;

const afterCookingHour = Math.floor(afterCooking / 60);
const afterCookingMinutes = afterCooking - afterCookingHour * 60;
console.log(afterCookingHour >= 24 ? Math.floor(afterCookingHour % 24) : afterCookingHour, afterCookingMinutes);