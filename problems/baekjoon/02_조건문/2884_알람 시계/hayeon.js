let input = require("fs").readFileSync("example.txt").toString().split("\n");

let [hours, minutes] = input[0].split(" ").map(Number);

if (minutes < 45) {
  hours -= 1;
  minutes += 15;
} else {
  minutes -= 45;
}
if (hours < 0) hours = 23;

console.log(hours, minutes);

/**
 * 풀이
 * input값을 숫자형으로 변환한다.
 * 그리고 먼저 2가지 조건이 필요하다.
 * 1. 45분보다 작을때
 * 2. 45분보다 클때
 *
 * (1) 45분보다 작을땐 시간에서 -1을 해주고 분에서 +60 -45를 해줘야한다 (결국은 +25)
 * (2) 45본보다 클 땐 그냥 분에서 -45 해주면 된다.
 *
 * 이렇게만하면 통과가 안된다. 이유는 0시에 대한 조건도 걸어줘야하기 때문
 * 만약, 0시 10분일 때 0시에서 -1을 빼면 -1시이므로 말이 안된다.
 * 따라서 마지막 조건을 시간이 0보다 작게되면 23시로 바꿔줘야한다.
 */
