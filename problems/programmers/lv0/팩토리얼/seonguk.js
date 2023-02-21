function solution(n) {
  // e.g. n = 7
  let down = 1;
  let up = 2;
  if (n === 1 || n === 2) return n; // n이 1 또는 2 일 경우 그대로 출력
  for (let i = 2; i < n; i++) {
    down *= i; // e.g. i = 3, 3! = 6
    up *= i + 1; // e.g. 4! = 24
    if (down <= n && up > n) {
      // OK
      return i; // 3 출력
      break;
    }
  }
}

// 풀이 : 팩토리얼 범위를 점점 올려 범위 사이에 속할 경우
//       입력값보다 작은 최대 팩토리얼을 출력하도록 구현
