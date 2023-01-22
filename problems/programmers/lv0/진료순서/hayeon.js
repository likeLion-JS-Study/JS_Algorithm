function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map((el) => sortedEmergency.indexOf(el) + 1);
}

/**
 * 풀이
 * 배열의 인덱스위치값을 얻기위해 먼저 내림차순으로 정리를 해준다.
 * 이때 전개연산자를 이용해 얕은 복사를 한 후 정렬을 해야한다.
 * 복사를 하지 않고 그냥 정렬을 하면 원본의 배열도 바뀌어서 map함수, indexOf를 사용할 수 없다.
 * 얕은 복사 후 원본 배열에 map함수를 이용해 복사한 배열(정렬된 것)의 인덱스 위치값을 얻으면 된다.
 */
