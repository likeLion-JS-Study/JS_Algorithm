let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B)); // 소수점 버림
console.log(A % B);
