const [a, b] = input[0].split(" ").map(Number);

const plus = a + b;
const minus = a - b;
const multiple = a * b;
const division = Math.floor(a / b);
const remainder = a % b;

console.log(`${plus}\n${minus}\n${multiple}\n${division}\n${remainder}`);

/**
 * 풀이
 * 숫자로 변환후에 하나씩 사칙연산 해주는 변수를 만든다.
 * 이때 몫을 구하는 것은 소수점이 나올 수 있어 Math.floor를 이용해 소수점을 반올림해준다.
 */
