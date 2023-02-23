const [n, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = list.split(' ').map(Number);
let test = new Array(Number(n)).fill(true); // n 만큼 true 값으로 채운 배열 생성

for (let i = 0; i < Number(n); i++) {
  if (arr[i] === 1) {
    // 1 일 경우 해당 위치 값에 false 입력
    test[i] = false;
  }

  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      // 나눠질 경우 해당 위치 값에 false 입력
      test[i] = false;
    }
  }
}

let sosu = test.filter((num) => num === true); // true 인 경우만 분류

console.log(sosu.length); // true 만 모은 배열의 길이 = 즉 개수 출력

//
