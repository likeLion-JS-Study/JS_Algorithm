const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let margin = c - b;
let breakevenPoint = Math.floor(a / margin) + 1;

console.log(margin <= 0 ? -1 : breakevenPoint);

// TODO 정리
// * 1. 한 줄에 고정비용, 가변비용, 판매비용을 입력값을 받음
// * 3. 마진값 = 판매비용 - 가변비용
// * 4. 손익분기점 = 고정비용 / 마진값 (floor 사용으로 소수점 이하 반올림) + 1
// * => 1 을 증가시킨 이유는 손익분기점을 지나는 시점을 구해야하기 위함
// * 6. 마진값이 0 이하일 경우 -1 을 출력, 그렇지 않으면 손익분기점 출력
