let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const total = +input[0];
const stuff = +input[1];
input.splice(0, 2);

let sum = 0;

for (let i = 0; i < stuff; i++) {
  let [price, count] = input[i].split(" ").map(Number);

  sum += price * count;
}

console.log(total === sum ? "Yes" : "No");

/**
 * 풀이
 * 반복문을 통해서 가격과 개수를 각각 구해준다.
 * 그리고 sum 변수에 두개를 곱한 값을 누적해 더해준다.
 * 주어진 합과 내가 구한 합이 같으면 yes, 아니면 no를 반환한다.
 * 이 풀이는 splice를 통해 input배열을 index 0 부터 2개를 잘라준 후
 * 나머지 배열들을 가지고 반복문을 돌린 것이다.
 *
 * 2번째 풀이는 splice를 쓰지 않고 인덱스를 2부터 시작해서 [가격, 갯수] 부터 선택하고
 * stuff(물건개수) + 1 을 해준 값 만큼 반복시켜 주면 된다.
 */

/*
2번째 풀이 (다른 방식)
const total = +input[0];
const stuff = +input[1];
let sum = 0;

for (let i = 2; i <= stuff + 1; i++) {
  let [price, count] = input[i].split(" ").map(Number);

  sum += price * count;
}

console.log(total === sum ? "Yes" : "No");
*/
