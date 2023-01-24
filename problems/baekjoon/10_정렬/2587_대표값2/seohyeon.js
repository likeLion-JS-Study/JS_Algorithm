const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = []; // input의 요소들을 넣어줄 배열을 만든다.
let total = 0;
let average = 0;

input.forEach((item) => (total += +item)); // total에 다 요소들을 더한 값을 넣어준다.
input.map((item) => num.push(+item)); // input의 요소들을 숫자로 타입을 변환시킨뒤 하나씩 push해서 num배열에 추가해준다.

average = total / num.length; // 숫자갯수만큼으로 합을 나누어 평균을 구한다.

console.log(average);
num.sort(); // 배열을 오름차순으로 정렬한다.
console.log(num[Math.floor(num.length / 2)]); // 중간값을 구하기위해서, 배열길이를 절반으로 나눈뒤 내림하여 구한다.(배열은 인덱스0부터 시작하기 때문)
