# [실버 5] BOJ1978 소수찾기

> 문제는 [여기](https://www.acmicpc.net/problem/1978)서 확인하세요.

#### 분류 :

- 수학
- 정수론
- 소수 판정
- 에라토스테네스의 체

### 문제 설명

주어진 수 N개 중에서 소수가 몇 개인지 판별하기

#### Input

4  
1 3 5 7

#### Output

3

### Solution

[문제 풀이 작성]

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

function solution() {
  const num = +input[0];
  const arr = input[1].split(" ").map((item) => +item);
  let ans = 0;
  arr.forEach((item) => {
    if (checkPrimeNumber(item)) ++ans;
  });
  console.log(ans);
}

function checkPrimeNumber(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; ++i) {
    if (num % i === 0) return false;
  }
  return true;
}
```
