//방법1
function solution(n) {
  let count = 1;

  // count*6을 n으로 나눴을때, 나머지가 0이면 그 count가 답이고, 아니면 count++해준다.
  // count*6이 최소공배수인 것이다.
  while ((count * 6) % n) {
    count++;
  }
  return count;
}

//방법2
function solution(n) {
  return (
    Array(6) // 일단 6개의 속성이 들어가는 배열을 만들고
      .fill(n) // 그 요소들을 다 n이라는 값으로 넣는다 => [ n, n, n, n, n, n]
      .map((item, index) => (item = item * (index + 1))) // 이 배열을 map함수로 돌려서 새로운 배열을 반환한다.
      .find((item) => item % 6 === 0) / 6 // 반환한 배열에서 6으로 나누어지는 요소를 찾는다. 찾은 뒤 6으로 나눠준다.
  );
}
