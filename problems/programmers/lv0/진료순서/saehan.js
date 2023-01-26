// 진료순서 정하기

/*
문제

외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);
  // 전개 연산자를 이용하여 입력된 배열을 복사하고 내림차순으로 정렬한다.
  return emergency.map((x) => sorted.indexOf(x));
  // map에 indexOF를 화살표 함수 방식으로 배열에서 지정된 첫 번째 인덱스를 반환시킨다
}
