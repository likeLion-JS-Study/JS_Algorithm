const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let total = parseInt(input[0]);
let count = parseInt(input[1]);

input.splice(0, 2);
// input에서 받았으므로 이제 total과 count가 들어있는 input을 제거함
// => 앞으로는 각 물건의 가격, 갯수만 input배열에 다 새로 채울것임.

let check = 0;

for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(" "); // input 받은 숫자들을 " "단위로 쪼개어 배열의 요소로 넣어준다.
  check += parseInt(price) * parseInt(num);
}

total == check ? console.log("Yes") : console.log("No");
