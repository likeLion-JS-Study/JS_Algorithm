# [Bronze 2] 2587 대표값2

> 문제는 [여기](https://www.acmicpc.net/problem/2587)서 확인하세요.

#### 분류 : 사칙연산(arithmetic), 구현(implementation), 수학(math), 정렬(sorting)

### 문제 설명

<p>어떤 수들이 있을 때, 그 수들을 대표하는 값으로 가장 흔하게 쓰이는 것은 평균이다. 평균은 주어진 모든 수의 합을 수의 개수로 나눈 것이다. 예를 들어 10, 40, 30, 60, 30의 평균은 (10 + 40 + 30 + 60 + 30) / 5 = 170 / 5 = 34가 된다.</p>

<p>평균 이외의 또 다른 대표값으로 중앙값이라는 것이 있다. 중앙값은 주어진 수를 크기 순서대로 늘어 놓았을 때 가장 중앙에 놓인 값이다. 예를 들어 10, 40, 30, 60, 30의 경우, 크기 순서대로 늘어 놓으면</p>

<p style="text-align: center;">10 30 30 40 60</p>

<p>이 되고 따라서 중앙값은 30이 된다.</p>

<p>다섯 개의 자연수가 주어질 때 이들의 평균과 중앙값을 구하는 프로그램을 작성하시오.</p>

#### Input

<p>첫째 줄부터 다섯 번째 줄까지 한 줄에 하나씩 자연수가 주어진다. 주어지는 자연수는 100 보다 작은 10의 배수이다.</p>

#### Output

<p>첫째 줄에는 평균을 출력하고, 둘째 줄에는 중앙값을 출력한다. 평균과 중앙값은 모두 자연수이다.</p>

### Solution

[문제 풀이 작성]

```javascript
// [아래에 코드 작성]
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);
// 입력값을 받아 정수형으로 바로 받아내었다

const result = input.reduce((sum, cur) => {
  return sum + cur;
}, 0);
// reduce를 이용하여 초기값에 0을 넣어 숫자형으로 갑을 받아낼 것으로 설정하고 누적값이 초기값 0부터 시작해서 return 하는대로 누적된다.

let newArray = input.sort((a, b) => a - b);
// 오름차순으로 된 새로운 배열로 정리해준다. 이유 : 그냥 뒤죽박죽된 거 중에서 중앙값 뽑아내기 쉽게하려고
let median = Math.floor(newArray.length / 2);
// 배열의 길이에서 2나누면 딱 중앙값의 순서가 나오니 그걸 소수점 때버린다.

console.log(result / input.length);
// 첫째줄에는 평균값을 출력
console.log(newArray[median]);
// 둘째줄에는 중앙값을 출력
```
