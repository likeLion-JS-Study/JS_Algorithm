const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function f(num){
  const strNum = String(num);
  if(strNum.length <= 2){
    return true;
  }
  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1]; //이전값과 비교
  for(let i = 2; i < strNum.length; ++i){
    if(strNum[i] - beforeNum !== diff){
      return false;
    }
    beforeNum = +strNum[i];

  }
  return true;
}

// 한수가 몇개인지 체크
function solution(N){
  let cnt = 0;
  for(let i = 1; i <= N; ++i){
    if(f(i)){
      cnt++;
    }
  }
  console.log(cnt);
}

/*풀이*/
// 한수인지 아닌지를 return하는 함수 만들기
// 각 자리수가 등차수열인지 확인하기 위해 각 자리수를 꺼내준다.
// 등차를 구하기 위해선 -> 첫번째 - 두번째 차를 구함.
// 예외처리 : 길이가 1~2까지는 무조건 한수 처리를 시켜야함.
// 예외처리: 길이가 3번째 부터 등차를 구해서 한수인지 아닌지 구해야함.
// 마지막은 한수가 몇개인지 체크해주는 함수.