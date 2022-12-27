const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const sum = a+b;
const dis = a-b;
const mul = a*b;
// 자스에서는 몫을 구할 때 나눈 후에 정수형으로 바꿔주어야 함! 파이썬이랑 다르다!!
const div = parseInt(a/b);
const ex = a%b;


console.log(sum);
console.log(dis);
console.log(mul);
console.log(div);
console.log(ex);