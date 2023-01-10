# [Bronze 4] 숫자의 합 11720 

> 문제는 [여기](https://www.acmicpc.net/problem/11720)서 확인하세요.

#### 분류 : 구현(implementation), 수학(math), 문자열(string)

### 문제 설명

<p>N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.</p>

#### Input

<p>첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.</p>

#### Output

<p>입력으로 주어진 숫자 N개의 합을 출력한다.</p>


### Solution

[문제 풀이 작성]

```javascript

// [아래에 코드 작성]
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(N, numbers){
  let sum = 0;

  for(let i = 0; i < N; ++i){
    sum += +numbers[i];
    // numbers에서 받아온 문자열을 하나씩 숫자로 바꿔준다. -> 단항 연산자 +을 사용함.
    // sum 누적시켜준다.
  }
  console.log(sum);
}

```