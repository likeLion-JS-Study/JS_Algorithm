const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let arr = [];

for (let i = 1; i < 31; i++) {
  arr.push(i);
}

let diff = arr.filter((x) => input.indexOf(x) === -1);

while (diff.length) {
  console.log(diff.shift());
}

//* 정리
//* arr (1 - 30) 배열 생성
//* filter, indexOf 를 사용하여 차이를 diff 배열에 추가
//* diff.shift() 를 사용해서 diff 배열의 첫 번째 요소를 출력
//* diff.length = 0 이 되면 while 문 종료
