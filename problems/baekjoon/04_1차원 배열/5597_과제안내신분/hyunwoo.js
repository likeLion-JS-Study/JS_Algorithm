// 생각난 풀이법

// 1. 비트마스크
// 다른 언어 c, java int형 2^32, 32개 표현 가능
// 자바스크립트는 Number자료형 2^64비트

// 2. map 자료형
// 최대 30이라는 범위가 주어졌으니 30배열 자료형을 쓰는게 더 효율적일듯

// 3. length: 30짜리 배열

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function (line) {
    input.push(+line);
}).on('close', function () {
    solution();
    process.exit();
});

function solution() {
  // 3 풀이
  const arr = Array.from({length: 30}, _ => false );
  input.forEach(item => {
    arr[item - 1] = true;
  });
  arr.forEach((item, idx) => {
    if (!item) console.log(idx + 1);
  })
}