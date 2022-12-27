//실행 단축키 ctrl + alt(option) + n

const { count } = require('console');
const { get } = require('http');

// const { func, element } = require('prop-types');

// 한 줄에 공백으로 값이 들어올 때 -> 공백으로 split한 문자들이 array 형태로 들어온다. parseInt로 하나하나 분리한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 한 줄에 하나씩 값이 들어올 때 -> 개행문자'\n'로 split한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// ⭐️ vscode에서 문제 풀어보고 테스트 할 때는 readFileSync('example.txt'), 
// ⭐️ 백준에 제출할 때에는 readFileSync('/dev/stdin')으로 쓴다!


let input = Number(require('fs').readFileSync('example.txt'));

for (let i = input; i>0; i--){
  console.log(" ".repeat(input-i)+"*".repeat(i));
}