// 구조분해할당으로 값 넣어주기
const [a,b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sum = a+b;
const dis = a-b;
const mul = a*b;
// 자스에서는 값을 나눈 후에 소수점이 나오기 떄문에 몫을 구하기 위해서는 정수형으로 바꿔주어야 함! 
const div = parseInt(a/b);
const ex = a%b;

let answer = [sum,dis,mul,div,ex];

console.log(answer.join('\n'));