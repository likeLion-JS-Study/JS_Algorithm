let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

// 풀이
// 1. 입력값 불러오기, fs 모듈 사용
// 2,3. 문자열로 불러왔기에 입력값을 정수형(Integer)로 변환
// 5~9. 덧셈, 뺄셈, 곱셈, 몫, 나머지 순으로 구현
// 8. a / b 을 실행하면 소수점까지 출력되기에 parseInt() 를 사용해서 몫을 구함
