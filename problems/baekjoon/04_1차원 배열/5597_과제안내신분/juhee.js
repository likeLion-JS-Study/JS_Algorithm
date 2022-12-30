let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let answer = [];

// 배열의 includes 메소드 사용하여 출석번호 포함여부 확인
// 출력 시 작은 수부터 보여주기로 해서 반복문은 작은수 -> 큰수 대로 확인
for(let i = 1; i <= 30; i++) {
  input.includes(i) ? "" : answer.push(i); 
}
// 출력시 줄바꿈하여 보여주기
console.log(answer.join('\n'))