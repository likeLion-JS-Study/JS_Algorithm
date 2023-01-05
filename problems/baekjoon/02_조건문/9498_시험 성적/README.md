# [Bronze 5] 9498 시험 성적

> 문제는 [여기](https://www.acmicpc.net/problem/9498)서 확인하세요.

#### 분류 : 구현

### 문제 설명

<p>시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.</p>

#### Input

<p>첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.</p>

#### Output

<p>시험 성적을 출력한다.</p>

### Solution

[문제 풀이 작성]

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = parseInt(input);

if (a >= 90) {
  console.log("A");
} else if (a >= 80 && a <= 89) {
  console.log("B");
} else if (a >= 70 && a <= 79) {
  console.log("C");
} else if (a >= 60 && a <= 69) {
  console.log("D");
} else console.log("F");

// 풀이
// 1. 입력값 불러오기, fs 모듈 사용
// 2. 문자열로 불러왔기에 입력값을 정수형(Integer)로 변환
// 4~12. 조건에 맞게 시험 성적을 출력 (90 ~ 100, 80 ~ 89, 70 ~ 79, 60 ~ 69, 나머지 순)

```