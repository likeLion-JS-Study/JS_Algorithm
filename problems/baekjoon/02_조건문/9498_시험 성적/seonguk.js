const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = parseInt(input);

if (a >= 90) {
  console.log("A");
} else if (a >= 80 && a <= 89) {
  console.log("B");
} else if (a >= 70 && a <= 79) {
  console.log("C");
} else if (a >= 60 && a <= 69) {
  console.log("D");
} else console.log("F");

// 풀이
// 1. 입력값 불러오기, fs 모듈 사용
// 2. 문자열로 불러왔기에 입력값을 정수형(Integer)로 변환
// 4~12. 조건에 맞게 시험 성적을 출력 (90 ~ 100, 80 ~ 89, 70 ~ 79, 60 ~ 69, 나머지 순)
