function solution(n) {
  let answer = 0;
  for (let num = 1; num <= 10; ++num)
    if (n >= factorial(num)) {
      answer = num;
    }
  return answer;
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
