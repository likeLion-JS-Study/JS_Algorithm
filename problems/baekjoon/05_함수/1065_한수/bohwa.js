const fs = require("fs");
const [n] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000
`
)
  .trim()
  .split("\n");

let N = Number(n);

let count = 0;
// 0개부터 시작이니깐 0을 기본값으로 설정해준다.
// 그리고 한수의 갯수가 늘어날수록 1씩 증가시켜줄것이다.

for (let i = 1; i <= N; i++) {
  let nArr = String(i);
// i를 문자열로 바꿔준다.왜냐하면 index의 값을 하나씩 따로 가져오기 위함이다.

  if (i < 100) {
    count++;
    continue;
  }
//   예제출력 1을 보면 1 ~ 99는 모두 한수인것을 추측할 수 있으므로 100미만의 숫자는 한수로 인정을 해준다.
// 1~99값은 한수로 기본 설정해주고, 이 숫자 외의 숫자들을 한수인지 아닌지 판단하고 한수이면 count값을 증가시켜준다.

  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
  }
}
// string으로 바꾼 nArr에서 0번째, 1번째 vs 1번째, 2번째 값을 비교한후에 그 차이가 동일하다면 count를 1 증가시킨다.
// 

console.log(count);

// count결과 뽑아내면 한수의 갯수가 된다.