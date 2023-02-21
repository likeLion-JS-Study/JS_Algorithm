const input = require('fs').
readFileSync('example.txt').
toString().
.trim();

// 이 부분을 모르겠음 왜 c,num 에 구조분해할당을 해줬는데 왜 ? 
const [c,nums] = input.split("\n")

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  
  // Math.sqrt() : 숫자의 제곱근을 반환
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/* ---------------------------------- 풀이방법 ---------------------------------- */
// 소요시간 : 1시간 30분
 // 소수 : 1과 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
 // 에라토스테네스의 체 : https://devbirdfeet.tistory.com/270
 // n까지의 수에서 소수 만을 쏙 골라내는 알고리즘
 

