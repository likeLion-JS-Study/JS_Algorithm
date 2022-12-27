const fs = require("fs");

let input = fs.readFileSync("example.txt").toString().trim().split(" ");
// 변수가 두개 이상이므로 split(' ')으로 표기해준다.

// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

// 입력
// 두 자연수 A와 B가 주어진다. (1 =< A, B =< 10,000)
const A = Number(input[0]);
const B = Number(input[1]);
// 자연수 A, B를 선언하고 각 변수를 할당한다.

// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 즐에 A*B, 넷째 줄에 A/B, 다섯쨰 줄에 A%B를 출력한다.

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
// Math.floor() 함수는 항상 내림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환합니다.
console.log(A % B);
