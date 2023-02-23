const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [c, nums] = input.split("\n");

// 소수는 '1보다 큰 정수 1과 자기 자신으로만 나누어지는 수이다.





const isPrime = (n) => {
    if (n == 1) {
      return false;
    }
    // 1은 소수가 아니니깐 false로 해준다.
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
// 1과 자신만으로 나누어 떨어지는 isPrime이라는 함수를 만들어둔다.





console.log(nums.split(" ").filter(v => isPrime(v)).length);

// 필터를 걸어서 v에서 isPrime의 길이를 출력하면 소수의 갯수가 출력된다.