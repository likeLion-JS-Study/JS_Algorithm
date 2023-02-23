function solution(n) {
  var answer = 0;
  let pizzaCount = 1;
  while(true) {
      if(pizzaCount * 6 % n === 0){
          return pizzaCount; // return으로 끝내버리기
      }
      pizzaCount = pizzaCount +1;// 1씩 증가
  }
  return answer;
}

// answer = pizzaCount;
// break;  => 답이 똑같이 나옴
// 한판의 - 6조각씩
// n/2 나머지 0
// 1명이 오면 1판 두명 1판