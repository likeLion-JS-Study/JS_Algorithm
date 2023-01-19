function solution(array) {
  let sortedArray = array.sort((a,b) => a-b);
  var answer = 0;
  let cnt = 0;
  
  let choi = -1; //최빈값이 무엇인지
  let choiRepeatCnt = 0; // 최빈값이 될때 몇번 반복해서 된건지
  let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지
  let beforeNumber = -1; //지금 보고있는 숫자 이전 숫자
  let isDupChoi = false;

  while(cnt < array.length){
      if(beforeNumber !== array[cnt]){
          repeatCnt = 1;
      }else {
          repeatCnt = repeatCnt + 1;
      }
      if(repeatCnt === choiRepeatCnt){
        if(choi !== array[cnt]){
            isDupChoi = true;
        }    
      }
      if(repeatCnt > choiRepeatCnt){
          choi = array[cnt];
          choiRepeatCnt = repeatCnt;
          isDupChoi = false;
      }
      beforeNumber = array[cnt];
      cnt = cnt+1;
  }
  if(isDupChoi) return -1;
  return choi;
}


// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 2. 최빈값을 그때그때 기록한다.