const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

let inputData = +input[0];
let result = "";

for (let i = 2; i <= inputData; i++) {
  while (inputData % i === 0) {
    inputData = inputData / i;
    result += `${i}\n`;
  }
}

console.log(result);

/**
 * 풀이
 * 입력값을 2부터 시작해 나눠주고,
 * 반복문에서 i가 입력값으로 나눈 나머지가 0일때 (완전히 나눠진 것)
 * 인풋데이터를 i로 나눠 계속 대입해준다.
 * 끝까지 나눠질때까지 반복하면 된다.
 */
