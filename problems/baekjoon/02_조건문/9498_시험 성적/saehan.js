const fs = require("fs");

let input = fs.readFileSync("example.txt");

// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 console.error('작성하시오',작성하시오)

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

const a = input;

if (100 >= a && a >= 90) {
  console.log("A");
} else if (89 >= a && a >= 80) {
  console.log("B");
} else if (79 >= a && a >= 70) {
  console.log("C");
} else if (69 >= a && a >= 60) {
  console.log("D");
} else {
  console.log("F");
}
