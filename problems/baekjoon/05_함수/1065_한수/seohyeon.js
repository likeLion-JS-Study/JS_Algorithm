const input = require("fs").readFileSync("dev/stdin").toString().trim();

function solution(input) {
  let count = 0; //한수의 갯수를 나타낼 변수
  for (let i = 1; i <= input; i++) {
    if (i < 100) {
      // i가 100이하라면 즉, 1부터 99까지는 모두 등차수열이 되므로 다 세어준다.
      count++;
    } else if (i >= 100 && i < 1000) {
      // i가 3자리 숫자라면, 각 자리수를 빼준 차가 같으면 등차수열이 될것이다.
      let stNum = String(i); // i를 숫자에서 문자형으로 바꾸어준다.(숫자형태로 각자리수를 나타낼수가 없기때문)
      let dif1 = +stNum[1] - +stNum[0]; // 문자를 숫자로 바꾸어 각자리의 차를 구해준다
      let dif2 = +stNum[2] - +stNum[1];

      if (dif1 === dif2) {
        // 각 자리수의 차가 같다면 등차수열이므로 한수의 갯수로 세어준다.
        count++;
      }
    }
  }
  return count; // 세어준 갯수를 반환한다.
}

console.log(solution(input));
