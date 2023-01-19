/*
문제

정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

소인수분해 => 1보다 큰 자연수를 소인수(소수인 인수)들만의 곱으로 나타내는 것
*/

/*
입력

첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.
*/

/*
출력

N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
*/
const fs = require("fs");

const input = fs.readFileSync("example.txt").toString().split(" ");

let num = parseInt(input[0]);
// 입력값을 정수형으로 형변환해주고 num에 할당한다
let i = 2;
// 여기서 i 값은 소인수를 구하기 위해 입력값에 나눠줄 최소한의 값이다
let primes = [];
// 소인수를 담을 배열을 생성해준다
while (true) {
  // while 반복문을 사용한다
  if (num % i === 0) {
    //입력값에 2를 나눈 나머지가 0일 경우
    num = num / i;
    // 입력값에 2를 나눈 값을 num에 재할당한다
    primes.push(i);
    // 소인수를 담을 배열에 i값을 넣어준다
    i = 1;
    // num을 2로 나눈 나머지가 0일 때 i = 1이다
  }
  i++;
  // i를 후증가시켜준다
  if (i > num) {
    break;
    // i 값이 입력값보다 커질 경우 종료한다
  }
}

console.log(primes.join("\n"));
// 소인수 배열의 모든 요소를 join메서드로 연결해 하나의 문자열로 만들어준다
