function solution(emergency) {
  var answer = [];
  const sortedEmergency = [...emergency].sort((a, b) => (b - a));
  for (let i = 0; i < emergency.length; ++i) {
    for (let j = 0; j < sortedEmergency.length; ++j) {
      if (emergency[i] === sortedEmergency[j])
        answer.push(j + 1);
    }
  }
  return answer;
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));