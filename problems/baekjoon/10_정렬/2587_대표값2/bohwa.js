const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;

for (const num of input) {
  sum += num;
}

// for of 로 input에 있는 값을 모두 더해준다.

const ascArr = input.sort((a, b) => a - b);
// input에 있는 배열을 오름차순으로 다시 정렬을 해준다.

const medium = Math.floor(ascArr.length / 2);
// 오름차순으로 다시 정렬한 배열에서 나누기 2를 해준값이 (소수점으로 떨어지면 math.floor로 정수를 구해줌) 중앙값이 된다.

console.log(sum / input.length);
// 평균 구한 결과이다.
// 평균은 input배열에 있는 값 모두 더해서 input길이만큼 나눈 것이 평균이다.

console.log(ascArr[medium]);
// 중앙값 구하기