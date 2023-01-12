let [n,numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력값 숫자 배열로 변환
numbers = numbers.split('').map(Number);

// reduce를 사용하여 배열 요소의 합 도출
const result = numbers.reduce((a,b) => a + b, 0)
console.log(result);