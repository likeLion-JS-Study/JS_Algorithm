# [lv0] 진료순서

> 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120835)서 확인하세요.

### 문제 설명

<p>외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 <code>emergency</code>가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>중복된 원소는 없습니다.</li>
<li>1 ≤ <code>emergency</code>의 길이 ≤ 10</li>
<li>1 ≤ <code>emergency</code>의 원소 ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>emergency</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[3, 76, 24]</td>
<td>[3, 1, 2]</td>
</tr>
<tr>
<td>[1, 2, 3, 4, 5, 6, 7]</td>
<td>[7, 6, 5, 4, 3, 2, 1]</td>
</tr>
<tr>
<td>[30, 10, 23, 6, 100]</td>
<td>[2, 4, 3, 5, 1]</td>
</tr>
</tbody>
      </table>
<hr>

#### Input & Output

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>emergency</code>가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>emergency</code>가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>emergency</code>가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.</li>
</ul>

### Solution

[문제 풀이 작성]

```javascript
function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map((el) => sortedEmergency.indexOf(el) + 1);
}

/**
 * 풀이
 * 배열의 인덱스위치값을 얻기위해 먼저 내림차순으로 정리를 해준다.
 * 이때 전개연산자를 이용해 얕은 복사를 한 후 정렬을 해야한다.
 * 복사를 하지 않고 그냥 정렬을 하면 원본의 배열도 바뀌어서 map함수, indexOf를 사용할 수 없다.
 * 얕은 복사 후 원본 배열에 map함수를 이용해 복사한 배열(정렬된 것)의 인덱스 위치값을 얻으면 된다.
 */
```
