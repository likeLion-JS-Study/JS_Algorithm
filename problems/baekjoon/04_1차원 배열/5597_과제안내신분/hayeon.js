// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("example.txt").toString().split("\n");

const submitStudent = input.map(Number);
const allStudent = [];

for (let i = 1; i <= 30; i++) {
  allStudent.push(i);
}

let result = allStudent.filter((x) => !submitStudent.includes(x));

console.log(result.join("\n"));

/**
 * 풀이
 * 제출한 학생 배열을 숫자로 변환해서 담아준다.
 * 그리고 모든 학생들의 번호를 담아줄 배열을 만들고 1 ~ 30 까지 넣어준다.
 * 결과값에 filter()함수를 이용해서 allStudent 배열과 submitStudent 배열의 요소를 비교해준다.
 * allStudent배열과 비교했을 때 submitStudent가 가지고 있지 않은 수를 찾아 반환한다.
 */
