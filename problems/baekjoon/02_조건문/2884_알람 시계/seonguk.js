const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

let hour = input[0];
let min = input[1];

if (min - 45 < 0) {
  if (hour === 0) {
    hour = 23;
  } else hour -= 1;
  min = 60 + (min - 45);
} else min -= 45;

console.log(hour, min);

//* 정리
//* 45분 일찍 알람을 맞췄을 경우
//* 1. 시간값이 바뀌는지에 따라 경우를 나누고
//* 2. 또한 날짜(전날)가 바뀌는지에 따라 경우를 나눠 문제를 수행
