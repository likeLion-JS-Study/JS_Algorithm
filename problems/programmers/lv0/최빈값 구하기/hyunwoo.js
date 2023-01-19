function solution(array) {
  let ans = [];
  let arr = array.sort((a, b) => a - b);
  let i = -1;
  let target = arr[0];
  let maxJ = 0;
  let maxVal = 0;
  while (++i < arr.length) {
    let k = i;
    let j = i - 1;
    while (++j < arr.length && arr[j] === target) {
      i = j;
    }
    if (j < arr.length && arr[j] > target)
      target = arr[j];
    ans.push(j - k);
  }
  let temp = [...ans];
  temp.sort((a, b) => (b - a));
  let findIndex = 0;
  for (let i = 0; i < temp.length; ++i) {
    if (temp[0] === ans[i]) {
      findIndex = i;
      break;
    }
  }
  // console.log(findIndex);
  let sum = 0;
  for (let i = 0; i <= findIndex; ++i) {
    sum += ans[i];
  }
  maxVal = arr[sum - 1];
  // console.log('maxVal',maxVal);
  let realResult = temp.filter(item => item === temp[0]);
  if (realResult.length > 1) return -1;
  return maxVal;
}

// console.log(solution([1, 2, 3, 3, 3, 4]));
// console.log(solution([1, 1, 2, 2]));
// console.log(solution([1, 2]));
// console.log(solution([0, 0, 0,  1, 1,2,  2, 2, 2, 3, 3, 3, 100]));
// console.log(solution([1, 1]));
// console.log(solution([ 0,0,1,1,3 ]));