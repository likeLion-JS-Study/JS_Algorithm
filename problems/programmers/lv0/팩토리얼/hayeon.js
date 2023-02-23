function getFactorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) result *= i;

  return result;
}

function solution(n) {
  let result = 0;

  for (let i = 0; i <= 10; i++) {
    if (n >= getFactorial(i)) result = i;
  }

  return result;
}

/**
 * 풀이
 * 1. for문을 이용해서 팩토리얼을 구하는 함수를 따로 빼준다.
 * 2. 반복문을 통해 결과값을 구한다.
 * - 이때 범위를 10까지 한 이유는 제한사항에 10!(3,628,800) 까지로 제한해줬기 때문이다.
 * - 그리고 n이 getFactorial(i)를 했을 때 i값을 반환한다.
 * - 만약 n이 7이고, getFactorial(4)이면 n < 4!(24) 이므로 성립되지 않고,
 * - n이 7이고 getFactorial(3)이면 n > 3!(6) 이므로 답은 3이 된다.
 */
