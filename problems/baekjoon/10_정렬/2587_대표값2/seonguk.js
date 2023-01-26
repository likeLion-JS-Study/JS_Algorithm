const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let avg = input.reduce((arr, cur) => (arr += cur)) / input.length;
let med = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];

console.log(avg);
console.log(med);

/* -------------------------------------------------------------------------- */
/*                                     풀이                                     */
/* -------------------------------------------------------------------------- */

/* bash */`
입력값을 받아 입력값 목록의 평균과 중앙값을 구하는 문제이다.

평균의 경우 `reduce` 를 사용해 입력값 총합을 구하는 식을 만들었으며, 이에 입력값 배열의 길이값으로 나눠 평균값을 도출했다.

```js
let avg = input.reduce((arr, cur) => (arr += cur)) / input.length;
```

중앙값의 경우 `sort` 를 사용해 입력값을 오름차순 정렬로 정리하였고, 이에 가운데 값을 도출하기 위해 식에 각괄호`[]`를 사용해 해당 값만 도출하도록 하였는데, 인덱스 값은 입력값 배열의 길이 / 2 한 값에 `Math.floor()` 를 사용해 소수값을 버리게 하여 가운데 인덱스 값으로 만들어주며 중앙값을 도출했다.

```js
let med = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];
```
`
