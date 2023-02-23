function solution(n) {
  let count = 1;
  let factorial = 1;

  while (count * factorial <= n) {
    factorial *= count; //1*2*3*...이런식으로 곱한것을 factorial에 넣어준다.
    count++;
  }
  return count - 1; // 마지막 count는 일단 증가한다음에 while조건문으로 검사하므로, 1빼주어야 한다.
}

//console.log(solution(3628800));
