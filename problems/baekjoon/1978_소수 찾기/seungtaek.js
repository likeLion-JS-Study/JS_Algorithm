let input = require("fs").readFileSync("example.txt").toString().split("\n");

const testCase = +input[0]; //숫자로 변경을 해야함
const numbers = input[1].split(" ").map(Number);

// numbers = [1,3,5,7]
let result = 0;

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  
  // Math.sqrt() : 숫자의 제곱근을 반환. 
  // =>  n 만 사용해서 할 수도 있는데 반복을 줄일려고 Math.sqrt() 사용하였다.

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // 나눠 떨어지면 소수가 아님
    }
  }
  return true; // 나머지들은 소수
}


numbers.forEach((num) => {
  if(isPrime(num)) {
    result++ // result 에 1씩 카운트를 함 => console로 출력을 하기 떄문에 return 사용하지 않음
  }
});

console.log(result) // 3개 (3,5,7)



// /* ---------------------------------- 풀이방법 ---------------------------------- */
// 소요시간 : 1시간 30분
 // 소수 : 1과 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
 // 에라토스테네스의 체 : https://devbirdfeet.tistory.com/270
 // n까지의 수에서 소수 만을 쏙 골라내는 알고리즘
 

