## [문제 제목]
> 문제는 [여기](https://www.acmicpc.net/problem/9498)서 확인하세요.

[문제 간단하게 설명]

## Solution

[문제 풀이 작성]
각 분기에 조건을 주어 원하는 문자를 출력했습니다.

```javascript
  if(90 <= score) {
    console.log('A');
  } else if(80 <= score) {
    console.log('B');
  } else if(70 <= score) {
    console.log('C');
  } else if(60 <= score) {
    console.log('D');
  } else {
    console.log('F');
  }
```