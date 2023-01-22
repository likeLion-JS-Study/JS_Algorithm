const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let test = new Array(input + 1).fill(true);

// 1 번 부터 입력값까지 검사하는 반복문 생성
for (let i = 1; i < input + 1; i++) {
  // 문자열 분리
  let arr = String(i).split("");

  // 3 자리 이하의 수는 모두 한수이기에 계산 생략
  if (arr.length < 3) continue;
  else {
    // 연속된 두 개의 수의 차이가 일정한 지 검사, 아닐 경우 false 값 적용
    arr[0] - arr[1] === arr[1] - arr[2] ? "" : (test[i] = false);
  }
}

// test 배열에서 값이 true 인 것만 hansu 라는 새로운 배열에 추가
let hansu = test.filter((num) => num === true);

// 0 번 인덱스는 생략해야 하기에 hansu 배열의 길이에 1 을 빼기
console.log(hansu.length - 1);

/* -------------------------------------------------------------------------- */
/*                                     풀이                                     */
/* -------------------------------------------------------------------------- */

/* bash */ `

어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.

먼저 1 부터 입력값까지의 배열을 생성해주었다. 값은 전부 true 로 설정해주었다.

```js
// 0 번부터 input 값까지
let test = new Array(input + 1).fill(true);
```

입력값까지 반복문을 사용해서 값을 비교하였는데, 우선 문자열을 나눠서 비교를 해야하기에 문자열로 바꾼 후 `split` 을 사용해 배열로 만들었다.
그리고 1 ~ 99 까지는 무조건 1 씩 더하기에 모두 한수여서 `continue` 를 사용해 계산을 생략하였다.

```js
  // 문자열 분리
  let arr = String(i).split("");

  // 3 자리 이하의 수는 모두 한수이기에 계산 생략
  if (arr.length < 3) continue;
```

3 자리의 수부터는 한수가 맞는지 검사를 해야한다. 그래서 3 자리의 경우 arr[0], arr[1] 의 값 차이, arr[1], arr[2] 의 값 차이가 같으면 한수이기에 이러한 공식을 사용해서 검사하였다. 만약 아닐 경우 test 배열의 해당 인덱스에 값을 `false` 로 변경했다.

```js
// 연속된 두 개의 수의 차이가 일정한 지 검사, 아닐 경우 false 값 적용
arr[0] - arr[1] === arr[1] - arr[2] ? "" : (test[i] = false);
```

반복문이 끝나고 true 인 값만, 즉 한수인 값만 뽑아내기 위해 `filter` 를 사용해서 새로운 배열을 만든 후, 새로운 배열의 길이가 곧 한수의 개수이기에 `length` 를 사용해 한수의 갯수를 뽑아냈다. 0 번 인덱스도 true 값으로 포함되기에 -1 를 주어 이를 배제하였다.

```js
// test 배열에서 값이 true 인 것만 hansu 라는 새로운 배열에 추가
let hansu = test.filter((num) => num === true);

// 0 번 인덱스는 생략해야 하기에 hansu 배열의 길이에 1 을 빼기
console.log(hansu.length - 1);
```
`
