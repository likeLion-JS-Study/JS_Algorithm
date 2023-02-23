function solution(n) {
  let pizza = 6;

  while (pizza % n !== 0) {
    pizza += 6;
  }
  return pizza / 6;
}

/**
 * 풀이
 * 피자가 한 판에 6조각이어서 변수로 설정하고 while문을 통해서 반복해준다.
 * 이때 피자를 n명으로 나눴을 때 0이 되지 않으면 피자를 6개 더 추가한다.
 * 이 과정을 반복하고, 0이 되었을 때 그 값을 6으로 나누면 피자박스의 개수를 구할 수 있다.
 */
