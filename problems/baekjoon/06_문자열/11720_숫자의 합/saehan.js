// 문제
/* 
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
*/

// 입력
/*
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
*/

const fs = require("fs");

const input = fs.readFileSync("example.txt").toString().split("\n");

const numberCount = Number(input[0]);
// 이거슨 N개를 의미한다.
const totalArray = input[1].split("");
// 이거슨 N개의 숫자를 공백없이 나타낸 모습이다.
// 연속된 배열의 값을 합하기 위해 반복문을 이용해볼 수 있다.

let totalNumber = 0;

for (let i = 0; i < numberCount; i++) {
  totalNumber += Number(totalArray[i]);
}

console.log(totalNumber);
// 출력
/* 
입력으로 주어진 숫자 N개의 합을 출력한다.
*/

// 또한 reduce를 이용하여 표현할 수도 있다.
// let totalNumber = totalArray.reduce((acc, v) => {
//   return (acc += v * 1);
// }, 0);

// console.log(totalNumber);
