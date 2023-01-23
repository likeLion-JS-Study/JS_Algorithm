function rank(value, arr) {
  // arr.slice()로 똑같이 새로운 배열 생성 후 정렬해주기
  // 💡 숫자 혹은 문자로 이루어진 배열.slice()해주면 깊은 복사가 된다.
	let sorted = arr.slice().sort((a,b) => b - a);
  // 내림차순한 뒤, 순위를 파악하고자 하는 value의 인덱스를 rank에 할당
	let rank = sorted.indexOf(value);
  // rank가 -1보다 크다면 === 찾는 value가 존재한다면 rank에 저장된 인덱스보다 1 큰 값 출력
  // 순서는 1부터 시작하니까!
	if (rank > -1) return rank+1;
	return null;
}

function solution(emergency) {
    let answer = [];
    
    // 입력받은 배열의 요소에 각각 rank 함수를 적용하여 return된 값을 answer 배열에 추가
    emergency.forEach((n) => answer.push(rank(n,emergency)))
    return answer;
}