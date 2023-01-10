let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let num2 = input[1].split("");
let sum = 0;

//split을 사용해서 문자열을 분리해 결과를 배열로 반환하였다.


for (let i = 0; i < num; i++) {
    sum += Number(num2[i]);
}

//num이 배열의 갯수니깐 배열갯수만큼 반복문 돌린다.

console.log(sum);