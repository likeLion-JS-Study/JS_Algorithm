const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s/);

const numbers = input.map(Number).sort((a, b) => a - b);
let result = "";

const arithmeticObj = {
  averageValue: () => {
    let sum = numbers.reduce((acc, cur) => acc + cur, 0);

    return sum / numbers.length;
  },

  midValue: () => {
    const midIdx = Math.floor(numbers.length / 2);

    return numbers[midIdx];
  },
};

for (let keys in arithmeticObj) {
  const calculator = arithmeticObj[keys];

  result += `${calculator()}\n`;
}

console.log(result);

/**
 * 풀이
 * 먼저 각각을 함수로 만들어준 풀이와 객체안에 넣어 호출하는 방법 2가지가 있다.
 * 함수로 풀었을 때는 결과값 반환시 함수들을 모두 호출해야한다는 번거로움 때문에 객체로 푸는 방법이 보기엔 편할 것 같다.
 * 하나의 객체에 함수를 넣어주고, for...in을 통해 함수안의 값들을 뽑아내 하나의 변수에 할당해주고 그 변수만 호출하면 된다.
 */

// 함수로 푸는 방식
/* const averageValue = () => {
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum / numbers.length;
};

const midValue = () => {
  const midIdx = Math.floor(numbers.length / 2);

  return numbers[midIdx];
};

console.log(`${averageValue()}\n${midValue()}`); */
