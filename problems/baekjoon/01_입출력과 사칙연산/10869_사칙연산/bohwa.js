var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let num1 = 7
let num2 = 3

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);

// 실수를 정수로 만들어주기 위해 parseInt를 사용하였다.
