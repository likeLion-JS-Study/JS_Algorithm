const row = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let max = 0;
let rowNum = 0;
let colNum = 0;

for (let i = 0; i < row.length; i++) {
  const column = row[i].split(" ").map(Number);
  if (max <= Math.max.apply(null, column)) {
    max = Math.max.apply(null, column);
    rowNum = i + 1;
    colNum = column.indexOf(max) + 1;
  }
}
console.log(max);
console.log(`${rowNum} ${colNum}`);

// 행열의 관점을 사용해서 이를 풀어보았다.

// 일단 입력값을 행 순서로 나눠서 이를 배열에 삽입하였다. 그리고 배열을 순환하기 전 전역변수로 최댓값, 행번호, 열번호와 같은 변수를 선언해주었다. 기본값은 전부 0이다.

// row 배열의 길이 만큼 순환을 하였으며, 각 단계마다 열 배열을 새로 만들어서 진행하였다. 열 배열 마다 최댓값을 구하였으며, 기존 최댓값과 열 배열에서 나온 최댓값을 비교하여 전체 최댓값을 구할 수 있었다. 그리고 전체 최댓값이 나올 때마다 해당 행, 열번호를 저장하여 이를 출력할 수 있게 설계했다.
