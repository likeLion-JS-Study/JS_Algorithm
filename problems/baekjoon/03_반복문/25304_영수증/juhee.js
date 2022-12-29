let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let x = parseInt(input[0]);
let n = parseInt(input[1]);
// 결제내역 배열 생성
let receipt = input.slice(-n);

// 총 결제금액
let total = 0;

for (let i = 0; i < n; i++){
  // 상품 금액과 구매 개수 배열 생성
  let price = receipt[i].toString().split(' ');
  total = total + (price[0] * price[1]);
}

// 총 결제 금액과 계산한 금액 비교 조건문
x === total ? console.log('Yes') : console.log('No');