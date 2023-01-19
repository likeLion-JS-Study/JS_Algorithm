let input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let count = input; // for문에서 돌때 사용할 변수

let primeNum = 2; // 소인수 초기화 선언

for (let i = 0; i <= count; i++) {
  // 원래 input숫자만큼 for문을 돈다.
  if (input !== 1) {
    // input값이 1이아닐경우
    if (input % primeNum === 0) {
      // input이 소인수로 나누어떨어졌을때 소인수를 출력하고
      console.log(primeNum);
      input = input / primeNum; // input값은 소인수로 나눈후 다시 넣어 진행한다.
    } else {
      ++primeNum; // input이 소인수로 나누어떨어지지 않은 경우, 소인수+1로 증가시킨다.
    }
  }
}
