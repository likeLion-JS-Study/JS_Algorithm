const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

/* -------------------------------------------------------------------------- */
/*                                  하연님의 식                                  */
/* -------------------------------------------------------------------------- */
// 고정비용 + 가변비용(x) < 노트북가격(x)
// 고정비용 < (노트북가격 - 가변비용) x 
// 고정비용 / (노트북가격 - 가변비용) < x
function solution() {
  const [A, B, C] = input[0].split(' ').map(_=>+_);
  if (B >= C) {
    console.log(-1);
    return;
  }
    console.log(Math.floor(A / (C - B)) + 1);
  // 반복문으로 풀려고한건 좀,,, 다음엔 시간복잡도 생각을 하고 푸세요,,
  // let num = 1;
  // while (A + B * num >= C * num) {
  //   ++num;
  // }
  // console.log(num);
}