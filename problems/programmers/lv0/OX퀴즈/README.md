# [level 0] OX퀴즈 - 120907 

> 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120907)서 확인하세요.

### 문제 설명

<p>덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 <code>quiz</code>가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.</li>
<li>1 ≤ <code>quiz</code>의 길이 ≤ 10</li>
<li>X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.</li>
<li>X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.</li>
<li>-10,000 ≤ X, Y ≤ 10,000</li>
<li>-20,000 ≤ Z ≤ 20,000</li>
<li>[연산자]는 + 와 - 중 하나입니다.</li>
</ul>

<hr>

#### Input & Output
<table class="table">
        <thead><tr>
<th>quiz</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["3 - 4 = -3", "5 + 6 = 11"]</td>
<td>["X", "O"]</td>
</tr>
<tr>
<td>["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]</td>
<td>["O", "O", "X", "O"]</td>
</tr>
</tbody>
      </table>
<hr>

### Solution

[문제 풀이 작성]

```javascript
// [아래에 코드 작성]
function solution(quiz) {
  let result = [];
  quiz.forEach((question) => {
    // 숫자와 연산자 구조분해 할당
    let [firstNum, operator, secondNum, equal, answer] = question.split(' ');
    // 연산자 구분에 따른 연산 진행
    let realAnswer = operator === "+" ? +firstNum + +secondNum : +firstNum - +secondNum;
    // 퀴즈 답과 실제 답 비교
    let quizAnswer = realAnswer === +answer ? "O" : "X";
    result.push(quizAnswer)
  })
  return result;
}

```