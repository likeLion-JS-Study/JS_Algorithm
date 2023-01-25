const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = [];
rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  solution();
  process.exit();
})

function solution() {
  input.sort((a, b) => (a - b));
  const middleVal = input[Math.floor(input.length / 2)];
  const sum = input.reduce((cal, curr) => cal + curr, 0);
  console.log(sum / input.length);
  console.log(middleVal);
}
