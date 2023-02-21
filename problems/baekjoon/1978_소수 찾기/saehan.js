// 문제 번호 - 1978 소수 찾기(1과 자기 자신만을 약수로 가짐)
/* 
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
*/

const input = require('fs').readFileSync('example.txt').toString().split('\n') ;



const decimal = (n) => {
  if (n === 1 ) {
    // 배열의 index가 1과 같으면 false를 반환
    return false;
  }
  for (let i = 2; i<= Math.sqrt(n); i++ ) {
    // 위에서 1에 대하여 정의를 내렸으므로
    // 반복문은 2부터 시작한다
    // Math.sqrt()는 받은 수의 제곱근(n)을 반환한다
    if (n % i === 0) {
      // 배열에 i를 나눈 나머지가 0이라면 false를 반환시킨다
      return false;
    }
  }
  return true;
  // truthy한 값들은 반환해준다
}

const nums = input[1].split(' ').map(x => +x).filter(x => decimal(x)).length;
// 배열을 map을 이용해 숫자형의로 형변환시킨 후, filter를 이용해 truthy한 값만 받은 배열로 만들어 준 다음.length로 값을 도출해준다
console.log(nums)