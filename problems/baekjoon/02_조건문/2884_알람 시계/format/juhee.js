let [h,m] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

// 현재 설정되어 있는 알람 시간의 분이 45분 미만일때
if (m < 45) {
  // 45분 앞당겨야 하니까, 60분에서 얼만큼 더 뺄 것인지 계산
  m = 60 - (45 - m);
  // 그리고 시간도 앞당겨야 하는데, 만약 현재시간이 0시라면 23으로, 아니라면 1 빼기
  h === 0 ? h = 23 : h = h - 1;
} else {
  m = m - 45;
} 
console.log(h + " " + m);