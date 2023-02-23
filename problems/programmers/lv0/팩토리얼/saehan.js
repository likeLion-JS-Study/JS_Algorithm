// 문제 - 팩토리얼

/*
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
*/

const input = require('fs').readFileSync('example.txt').toString().split(' ');

let n = Number(input[0]);

const solution = (n) => {
  let factorial = 1;

  for(let i= 1; i<=10; i++){
    factorial *= i;
    if(factorial === n){
      return i;
    } else if(factorial > n){
      return i-1;
    }
  }
}

console.log(solution(n));