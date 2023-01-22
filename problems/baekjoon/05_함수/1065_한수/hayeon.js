const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

const n = +input[0];

let count = 0;

for (let i = 1; i <= n; i++) {
  if (i < 100) {
    count++;
  } else if (i < 1000) {
    const dataStr = String(i);
    if (+dataStr[0] - +dataStr[1] === +dataStr[1] - +dataStr[2]) {
      count++;
    }
  }
}
console.log(count);

/**
 * 풀이
 * 처음엔 문제이해를 못해서 헷갈렸다.
 * 1부터 1000까지의 수 중에 일의자리수 1~9는 한자리여서 공차이고,
 * 10~99도 두자리수이므로 각 자리의 수가 서로 공차의 관계를 가진다.
 * 100부터 세자리 수에서 카운트를 세줘야한다.
 *
 * 먼저 1~99까지는 모두 카운트해주고 100부터 1000까지 조건을 따로 걸어줘야한다.
 * 이때 문자열로 바꿔주는 이유는 num = "123"일 때 문자열의 인덱스값을 뽑아내기 위함이다.
 * 이때 num[0]은 1이고, num[1]은 2이다. 마찬가지로 num[1]은 2 num[2]은 3이다.
 * 각 자리가 등차수열인지 확인하기 위해서는 서로 빼준 값이 같으면 된다.
 * 즉, num[0] - num[1] === num[1] - num[2] 일때 공차는 1로 같고 한수가 되는 셈이다.
 * 이 경우에 해당하는 숫자를 카운트해주고 결과값을 반환하면 된다.
 */
