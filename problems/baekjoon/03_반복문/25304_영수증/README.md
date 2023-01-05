# [Bronze 5] 25304 영수증

> 문제는 [여기](https://www.acmicpc.net/problem/25304)서 확인하세요.

#### 분류 : 수학, 구현, 사칙연산

### 문제 설명

<p>준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.

영수증에 적힌,

- 구매한 각 물건의 가격과 개수
- 구매한 물건들의 총 금액

을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.</p>

#### Input

<p>첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다.

둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 $N$이 주어진다.

이후 $N$개의 줄에는 각 물건의 가격 $a$와 개수 $b$가 공백을 사이에 두고 주어진다.</p>

#### Output

<p>구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.
</p>

### Solution

[문제 풀이 작성]

```javascript
// [아래에 코드 작성]
// 1. total, stuff 숫자 형변환 시키기
const total = +input[0];
const stuff = +input[1];

/*
  2. splice 배열 잘라주기
  (예시)
  const arr = [1, 2, 3, 4, 5, 6];
  arr.splice(0, 2); => [3, 4, 5, 6]
*/
input.splice(0, 2);

// (가격 * 개수)을 담아줄 sum변수
let sum = 0;

// 3. 반복문 돌리기 : 인덱스 0 ~ 4까지 (가격, 개수 부분)
for (let i = 0; i < stuff; i++) {
  // 구조분해할당
  // splice로 잘라준 배열 input을 0 ~ 4까지 split으로 자르고 숫자로 변환 후 값 저장
  let [price, count] = input[i].split(" ").map(Number);

  sum += price * count;
}

// 4. 삼항조건연산자 : 총값이 합과 같으면 yes, 아니면 no
console.log(total === sum ? "Yes" : "No");

/* 2번째 풀이 (다른 방식) - splice를 사용하지 않음.
const total = +input[0];
const stuff = +input[1];
let sum = 0;

// input 배열을 splice로 잘라주지 않았기 때문에 인덱스 2번부터 시작한다.
// input 배열을 보면 인덱스 2번부터 [값, 개수]이기 때문이다.
// stuff + 1 : stuff는 4이고 input배열의 마지막 인덱스번호는 5이다.
// 따라서 + 1을 해줘야 마지막 배열 요소까지 반복문이 돌아간다.
for (let i = 2; i <= stuff + 1; i++) {
  let [price, count] = input[i].split(" ").map(Number);

  sum += price * count;
}

console.log(total === sum ? "Yes" : "No"); */
```
