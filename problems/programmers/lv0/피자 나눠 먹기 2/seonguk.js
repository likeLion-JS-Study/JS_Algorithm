function solution(n) {
  let pizzaBox = 6; // 한 판당 피자가 6조각 (전체 조각수)
  while (pizzaBox % n !== 0) {
    // 인원수로 나눴을 때 정확하게 떨어지지 않을 경우
    pizzaBox += 6; // 6 추가 = 즉, 한 판 추가
  }
  return pizzaBox / 6; // 인원수로 나눴을 때 정확하게 떨어질 경우 전체 조각 수에 6으로 나눠 몇 판인지 계산
}
