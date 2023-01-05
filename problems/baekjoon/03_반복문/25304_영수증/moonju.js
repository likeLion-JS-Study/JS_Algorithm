const fs = require("fs");

const input = fs.readFileSync("example.txt").toString().split("\n");

const x = Number(input[0]); // x = 총 가격
const n = Number(input[1]); // n = 상품의 갯수

input.splice(0, 2);   

let sum = 0; //계산한 총 합

for (let i = 0; i < n; i++) {
  // 가격과 개수 정보 저장
  let [a, b] = input[i].split(" ");
  // 가격 * 갯수
  sum += Number(a) * Number(b);
}

if (x === sum) {
  console.log("Yes");
} else {
  console.log("No");
}






