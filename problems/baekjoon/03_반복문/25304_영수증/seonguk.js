const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const total = Number(input.shift());
const test = Number(input.shift());
let addPrice = 0;

for (let i = 0; i < test; i++) {
  const arr = input[i].split(" ").map((x) => Number(x));
  addPrice += arr[0] * arr[1];
  // addPrice += arr.reduce((a, b) => a * b);
}

console.log(total === addPrice ? "Yes" : "No");

//* 정리
//* 1,2 줄을 shift()연산자로 추출 (각각 total, test)
//* 남은 input 배열을 for 반복문을 사용해 각 줄마다 또다른 배열을 생성
//* 배열의 두 값을 곱해 이를 addPrice 에 합산
//* total 과 addPrice 값을 비교해 같으면 "Yes", 다르면 "No" 출력
