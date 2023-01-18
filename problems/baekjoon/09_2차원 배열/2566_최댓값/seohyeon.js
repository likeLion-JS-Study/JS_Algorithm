const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let totArr = [];
for (let i = 0; i < 9; i++) {
  totArr.push(input[i].split(" ").map(Number)); // 이부분이 이해가 안됩니다 ㅠ Number는 뭐죠?
}

let flatArr = totArr.flat(); // 하나의 배열로 합친다.

// 1) 최댓값 구하기
let maxVal = flatArr.slice().sort((a, b) => b - a)[0]; // 내림차순. 배열의 제일 첫번째 값이 최대값이 됨.
console.log(maxVal);

// 2) 몇 행 몇 열인지 구하기                  // 이 부분도 이해가 잘 안됩니다.. 어떻게 찾은건가요..?
const maxNumIdx = flatArr.indexOf(maxVal); // 최대값의 인덱스 출력함.
const h = Math.floor(maxNumIdx / 9) + 1;
const y = (maxNumIdx % 9) + 1;
console.log(h, y);
