// 문제 - 프로그래머스 피자 나눠 먹기 2

// 문제 설명
/* 
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

const input = require('fs').readFileSync('example.txt').toString().split(' ');

let n = Number(input[0]);

// const solution = (n) => {
//   let pizzaSlice = 6;
//    피자는 판당 6개 있음
//   while (pizzaSlice % n !== 0) {
//      반복문을 이용. 피자를 사람 수 만큼 나눴을 때 나머지가 0이 아닌 경우에는
//     pizzaSlice += 6;
//      값이 0이 될때까지 피자 한판을 더해준다는 말
//   }

//   return pizzaSlice / 6;
//    반복문을 만족한 피자를 판수(1판당 6조각)로 카운트
// }

const solution = (n) => {
  let cnt = 1;
  while (cnt * 6 % n){
    cnt++;
  }
  return cnt
}


console.log(solution(n));