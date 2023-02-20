function solution(n) {
  let ans = 1;
  while ((ans * 6) % n !== 0) {
    ++ans;
  }
  return ans;
}
