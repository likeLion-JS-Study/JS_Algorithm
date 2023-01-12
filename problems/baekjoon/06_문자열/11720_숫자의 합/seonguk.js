const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const total = input[1]
  .split("")
  .map(Number)
  .reduce((prev, curr) => prev + curr);
console.log(total);

// TODO 정리
// * 1. 여러 줄에 걸친 입력 값을 배열 값으로 받음
// * 3~6. 두 번째 입력된 값을 "" 로 나눠 배열로 제작
// *      map 을 사용해 숫자형으로 변환
// *      reduce 를 사용해 모두 합산하도록 제작
