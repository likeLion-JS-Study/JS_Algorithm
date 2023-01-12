const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

const [fixedCost, VariableCost, laptopPrice] = input.map(Number);

const breakEvenPoint = Math.floor(fixedCost / (laptopPrice - VariableCost));
let result = breakEvenPoint + 1;

VariableCost < laptopPrice ? result : (result = -1);

console.log(result);

/**
 * 풀이
 * 한 번에 생각이 안나서 노트에 정리하고 풀었다.
 * 먼저 [고정비, 가변비, 노트북가격]을 변수에 담아준다.
 * 문제를 잘 읽어보면 고정비 + (가변비 * x) < 노트북가격 * x 으로 손익분기점(x)를 구할 수 있다.
 * 첨에 반복문으로 풀어야하나? 했는데 예제가 너무 큰 수라서 반복문은 아닐거라고 추측했다.
 * 잘 생각해보면,
 * 고정비 < (노트북가격 - 가변비) * (손익분기점) 으로 볼 수 있고
 * 고정비 / (노브툭가격 - 가변비) < 손익분기점 으로 나타낼 수 있다.
 *
 * 이 때 Math.floor를 써준 이유는 나눗셈을 했을 때 소수점을 없애기 위함이다.
 * 따라서, 손익분기점 > Math.floor(고정비용 / (노트북가격 - 가변비용))이 완성된다.
 * 손익분기점은 이 비용들보다 커야하므로 +1 을 해주고 결과값에 넣어준다.
 *
 * 마지막으로 삼항연산자를 이용해서 -1이 리턴되는 경우를 생각해줘야한다.
 * (노트북가격 - 가변비용)에서 가변비용이 더 크다면 음수값이 나오므로 손익분기점도 음수값이 된다.
 * 따라서 가변비용 < 노트북가격 (+양수) 일때 결과값을 반환하고,
 * 아닐때 (-음수값) -1을 반환해준다.
 */
