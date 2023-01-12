const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const fixedPay = Number(input[0]);
const changingPay = Number(input[1]);
const price = Number(input[2]);
let num = 0; // 손익분기점이 될때의 최소 갯수를 구함.

for (let i = 1; ; i++) {
  // 답은 나오는데..
  //무한루프 돌려서 그런지 백준에서 계속 틀렸다고 나옵니다. 만약 이대로 유지하려면 for문범위를 어디까지로 잡아야할까요?궁금합니다.
  let totalPay = fixedPay + changingPay * i;
  if (changingPay >= price) {
    //changingPay >= price 일 경우, 절대 손익분기점을 넘을 수 없다.
    num = -1;
    break;
  } else if (totalPay < price * i) {
    // 만약 이럴경우, 손익분기점을 넘기는 첫 i 이므로 num에 i를 할당한다.
    num = i;
    break;
  }
}
console.log(num);
