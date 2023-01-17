let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
// 소인수분해는 2부터 시작!
let i = 2;
let answer = [];


while (true) {
  // 나머지가 0일 때 정답 배열에 추가하고 다시 소인수분해 시작
  if (n % i == 0){
      n = n / i;
      answer.push(i);
      i = 1;
  }
  // 나머지가 0이 아닐 경우 나누는 수를 1 증가
  i++; 
  // 그리고 나누어지는 수보다 나누는 수가 더 크면 반복문 탈출
  if (i > n) {
    break;
  }
}

// 오름차순 정렬
answer.sort();
console.log(answer.join('\n'));