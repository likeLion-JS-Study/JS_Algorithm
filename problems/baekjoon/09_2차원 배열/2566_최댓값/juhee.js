// 입력값을 두번 split하여 한번에 저장한다
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((x) => x.split(' ').map(Number));

let max = 0;
let y = 0;
let x = 0;

// 이중반복문을 돌며 max 보다 큰 값이 나올 때 max와 x, y 값을 변경해준다.
for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j++){
    if (max < input[i][j]) {
      max = input[i][j];
      y = i;
      x = j;
    }
  }
}

console.log(max);
console.log(`${y+1} ${x+1}`);