const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const getNum = String(input[1]); // slice는 문자열을 쪼개기 때문에 일단 string형태로 받아온다.
let numSum = 0; // 숫자들을 더할 곳이다.

for (let i = 0; i < num; i++) {
  numSum += Number(getNum.slice(i, i + 1)); // 한개씩 쪼갠것을 다 더해야하므로 for문을 돌렸고, Number로 형변환해주었다.
}

console.log(numSum);
