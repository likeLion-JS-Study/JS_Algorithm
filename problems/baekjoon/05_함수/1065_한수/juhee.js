let input = require('fs').readFileSync('example.txt');
let answer = 0;

function getDifference (n,i) {
  n = n.toString().split('').map(Number);
  let dif = (n[i+1]-n[i]);
  return dif
}

function checkDifference(i) {
  // 등차 비교할 수를 담을 배열
    let difList = [];
    // 숫자 자리수에 따라서 값의 차이를 비교하기 위해 차이를 얻어낸다.
    for (let j = 0; j < i.toString().length - 1; j++){
      difList.push(getDifference(i,j));
    } 
    // 만약 difList의 중복을 제거했을 경우 길이가 1이라면 
    // === 자리수 차이값이 같다 
    // === 각 자리의 수가 등차수열을 이룬다.
    if([...new Set(difList)].length === 1) {
      return true;
    } return false;
}

for (let i = 1; i <= input; i++) {
  // 한 자리 수와 두 자리 수는 등차를 비교할 필요가 없음 (등차라는 것은 차이가 두개는 있어야 비교 가능)
  // 따라서 한수로 인정 됨
  if (i < 100) {
    answer += 1;
  } 
  // 100보다 크거나 같을 경우 자리수별로 비교를 해야 함.
  else if(i >= 100){
    checkDifference(i) ? answer += 1 : '';
  }
}

console.log(answer);