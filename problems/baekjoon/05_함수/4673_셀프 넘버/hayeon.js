const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

function notSelfNumber(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

const selfNumber = new Array(10000).fill(true);

for (let i = 1; i <= 10000; i++) {
  selfNumber[notSelfNumber(i)] = false;

  if (selfNumber[i]) console.log(i);
}

/**
 * 풀이
 * 풀이법을 모르면 어려운 문제.. 대충 무슨느낌인지는 알겠는데 헷갈렸다.
 * 그래서 구글링을 좀 했다!
 * 1. 셀프넘버가 아닌 수를 구하는 함수를 구해야한다.
 * - n이 0보다 커야하고, 각 자릿수를 10으로 나눈 나머지를 sum에 누적해 더해주고
 * 다시 그 n을 10으로 나눈 값을 위 식에 대입해 반복해준다.
 *
 * 2. 셀프넘버를 구하기위해 10000개의 배열에 true값을 넣어두고
 * 반복문을 통해 셀프넘버가 아닌 수일때 false를 넣게 해준다.
 * 그리고 만약 셀프넘버일때 그 수를 출력해주면 된다.
 *
 */
