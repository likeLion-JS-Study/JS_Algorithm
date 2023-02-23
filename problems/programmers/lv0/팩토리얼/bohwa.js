function solution(n) {
  let result = 0
  // 제한사항의 최대 값이 10의 팩토리얼이기 때문에 10번 반복해준다.
  for(let i = 1 ; i <= 10; i++) {
      // n이 i의 팩토리얼보다 크다면 진행하여 최대 i를 구한다.
      if(n >= getFacto(i)) {
          result = i
          continue
      } else {
          break
      }
  }
  return result
}

function getFacto(num) {
  if(num > 1) return num*getFacto(num-1)
  return num
}
  // return을 통해 n*n-1... 을 구현한다.