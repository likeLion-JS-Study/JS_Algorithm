function solution(emergency) {
  const copiedEmergency = [...emergency].sort((a, b) => b - a);
  let rankArr = new Array(emergency.length).fill(0);

  // 배열을 내림차순 해준뒤, 진료순위를 기록하는 배열을 만들어준다.

  let count = 1;
  // 진료순위 1이 기본으로 설정해준다.

  for(let i = 0; i < emergency.length; i++){
     

      let index = emergency.indexOf(copiedEmergency[i]);
    

     
      rankArr.splice(index, 1, count);
      // 원본배열에서 그 사람의 인덱스를 찾고 진료순위 배열에서 해당 인덱스 자리에 진료 순위를 기록한다.

      
      count++;
      // 진료 순위를 1부터 증가를 시켜준다.
  }
  
  return rankArr;
}