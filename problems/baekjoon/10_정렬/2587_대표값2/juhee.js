let numberList = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

// 평균 함수
const average = ((arr) => {
  let avg = arr.reduce((a,b) => a + b) / arr.length;
  return avg;
})

// 중위값 함수
const median = ((arr) => {
  // 배열 정렬
  arr.sort();

  // 중위값 인덱스
  let midIdx = Math.floor(arr.length / 2);
  // 배열 요소의 개수가 짝수라면 중위수는 가운데에 위치한 두개의 요소 값의 평균
  if(arr.length % 2 === 0) {
    let mid = (arr[midIdx] + arr[midIdx-1]) / 2
  } let mid = arr[midIdx]
  return mid;
})

console.log(`${average(numberList)}\n${median(numberList)}`)