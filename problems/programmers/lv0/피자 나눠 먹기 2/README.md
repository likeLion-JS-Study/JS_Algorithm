# [등급] 문제번호 문제제목

> 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120815)서 확인하세요.

### 문제 설명

<p>머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 <code>n</code>이 매개변수로 주어질 때, <code>n</code>명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<p>1 ≤ <code>n</code> ≤ 100</p>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>6</td>
<td>1</td>
</tr>
<tr>
<td>10</td>
<td>5</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
</tr>
</tbody>
      </table>
<hr>

#### Input & Output

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로  모두 한 조각씩 먹을 수 있습니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.</li>
</ul>

### Solution

[문제 풀이 작성]

```javascript
// n명이 모두 같은 수의 피자(6개)를 먹으려면
// 해결방법 === 6과 n의 최소공배수를 구한 뒤 6으로 나눠준다.

//방법1
function solution(n) {
  let count = 1;

  // count*6을 n으로 나눴을때, 나머지가 0이면 그 count가 답이고, 아니면 count++해준다.
  // count*6이 최소공배수인 것이다.
  while ((count * 6) % n) {
    count++;
  }
  return count;
}

//방법2
function solution(n) {
  return (
    Array(6) // 일단 6개의 속성이 들어가는 배열을 만들고
      .fill(n) // 그 요소들을 다 n이라는 값으로 넣는다 => [ n, n, n, n, n, n]
      .map((item, index) => (item = item * (index + 1))) // 이 배열을 map함수로 돌려서 새로운 배열을 반환한다.
      .find((item) => item % 6 === 0) / 6 // 반환한 배열에서 6으로 나누어지는 요소를 찾는다. 찾은 뒤 6으로 나눠준다.
  );
}
```
