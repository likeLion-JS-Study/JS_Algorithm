const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let student = [];
let newArr = [];

for (let i = 0; i < 28; i++) {
  student.push(parseInt(input[i]));
}
for (let i = 1; i <= 30; i++) {
  newArr.push(i);
}

student.sort();
let answer = newArr.filter((x) => !student.includes(x)); // 차집합 구하기
let newAnswer = answer.join("\n"); // 배열을 문자열로 바꿈. 개행까지 완료

console.log(newAnswer);
