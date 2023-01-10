const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = input[0];
const B = input[1];
const C = input[2];

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);

// margin = 판매가격 - 가변비용
// 손익분기점을 넘기는 수를 구해야 하므로 +1