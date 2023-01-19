const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let totArr = [];
for (let i = 0; i < 9; i++) {
  totArr.push(input[i].split(' ').map(Number));
}

let flatArr = totArr.flat();

// 1) 최댓값 구하기
let maxVal = flatArr.slice().sort((a, b) => b - a)[0];
console.log(maxVal);

// 2) 몇 행 몇 열인지 구하기
const maxNumIdx = flatArr.indexOf(maxVal);
const h = Math.floor(maxNumIdx / 9) + 1;
const y = (maxNumIdx % 9) + 1;
console.log(h, y);


/**
1) 최댓값 구하기
for문을 이용해 각 행을 하나의 배열로 만들고, 그 배열들을 flat() 메서드를 이용해 하나의 배열로 합친다. 
=> sort 를 이용해 배열을 내림차순 정렬하면 배열의 첫 번째 값이 최대값이다. 
sort에 의해 원본 배열이 변경되는 것을 방지하기 위해 slice()로 얕은 복사한 뒤 정렬을 진행한다.

2) 몇 행 몇 열인지 구하기
9행 9열임을 생각하면 행은 9로 나눈 몫 +1이 되고, 열은 9로 나눈 나머지 +1이 된다. */