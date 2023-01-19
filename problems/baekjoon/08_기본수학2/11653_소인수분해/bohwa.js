const fs = require("fs");
let input = +(process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `9991`);

let result = [];
for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
//while은 (조건) 이 false가 될때까지 { } 코드를 반복실행한다.
//따라서 input숫자를 2로 계~~속 나누다가 2로 나눠떨어지지 않으면 숫자를 1씩 증가해서 또 input숫자를 나누고 나누고...그런다

}
console.log(result.join("\n"));