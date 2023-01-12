const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

const inputData = input[1].split("").map(Number);
const result = inputData.reduce((acc, cur) => acc + cur, 0);

console.log(result);

/**
 * 풀이
 * 보자마자 reduce를 이용해서 풀어야겠다고 생각했다.
 * reduce를 이용하기 위해선 배열로 만들어줘야한다.
 * 따라서 input[1]을 split("")을 통해 하나씩 쪼개 배열에 담아준다.
 * 그러면 '54321'이 ['5', '4', '3', '2', '1']이 되는데 map을 이용해 배열을 돌면서 숫자로 변환해준다.
 * 그러면 [5, 4, 3, 2, 1]이 되고 reduce를 이용해서 배열을 순환하며 값을 누적해 더해주면 된다.
 * reduce를 이용했을때, 0을 초기값으로 설정해줘야한다. (0에 누적해 계속 값을 더해줄것.)
 * 1) acc = 0, cur = 5
 * 2) acc = 5, cur = 4
 * 3) acc = 9(5+4), cur = 3
 * 4) acc = 12(9+3), cur = 2
 * 5) acc = 14(12+2), cur = 1
 * 6) acc = 15(14+1) >> 결과값!
 */
