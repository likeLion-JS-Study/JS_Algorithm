# [등급] 문제번호 문제제목

> 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120848)서 확인하세요.

### 문제 설명
<p> i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.</p>

### 제한사항
-  0 < n ≤ 3,628,800

#### Input & Output
| num1 | result| 
| :--: | :--: |
|3628800| 10 |
| 7  |  3   | 


### Solution

[문제 풀이 작성]

```javascript
function solution(n) {
  let result = 0
 // ex) 제한사항의 최대 값이 10의 팩토리얼이기 때문에 10번까지 반복
 for(let i = 1 ; i <= 10; i++) {
     // n이 factorial(i)보다 크다면 진행 후  최대 i를 구함
     if(n >= factorial(i)) {
         result = i
         continue
    // break 조건을 걸어서 탈출
     } else {
         break
     }
 }
 return result
}


// 재귀함수를 이용한 팩토리얼 
// 팩토리얼은 그 정의에 따라 n!을 n * (n-1)!로 바꿔쓸 수 있다.
// ex) n=5 라면 5*factorial(4) -> 4*factorial(3) -> ... ->1*factorial(0) 후 0! 에서 멈춘다 반환한다.
function factorial(n) {
return n ? n * factorial(n - 1) : 1;  
}

```