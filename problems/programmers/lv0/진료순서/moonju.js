function solution(emergency) {
  // 원래 위치 매칭
  let newEmergencyArray = [];
  let cnt = 0;
  while(cnt < emergency.length){
      newEmergencyArray.push({value: emergency[cnt], idx: cnt});
      cnt = cnt + 1;
  }
  newEmergencyArray.sort((a,b) => b.value - a.value)
  var answer = new Array(emergency.length);
  
  cnt = 0;
  while(cnt < newEmergencyArray.length){
      let item = newEmergencyArray[cnt];
      answer[item.idx] = cnt + 1;
      cnt = cnt + 1;
  }
  return answer;
}

/* 풀이 */
// 내림차순으로 정렬한다.
// 순서를 매겨주면 된다.
// 정렬을 한 다음 전에 원래 위치도 저장을 시켜줘야함.
// 결과 : 원래 위치에다가 응급도를 넣어야함.