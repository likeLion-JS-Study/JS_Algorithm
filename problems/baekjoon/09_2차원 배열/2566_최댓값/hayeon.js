const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const inputArray = input.map(Number);
const maxNumber = Math.max(...inputArray);
let result = [];
let x = 0;
let y = 0;

for (let i = 0; i < 9; i++) {
  const spliceArr = inputArray.splice(0, 9);
  result.push(spliceArr);
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (result[i][j] === maxNumber) {
      x = i + 1;
      y = j + 1;
    }
  }
}

console.log(`${maxNumber}\n${x} ${y}`);

/* for (let i = 0; i < 9; i++) {
  for (let j = 0; i < 9; j++) {
    if (maxNumber < inputArray[i][j]) {
      x = i + 1;
      y = j + 1;
      maxNumber = inputArray[i][j];
    }
  }
} */
