const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

function solution() {
  const num = +input[0];
  const arr = input[1].split(" ").map((item) => +item);
  let ans = 0;
  arr.forEach((item) => {
    if (checkPrimeNumber(item)) ++ans;
  });
  console.log(ans);
}

function checkPrimeNumber(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; ++i) {
    if (num % i === 0) return false;
  }
  return true;
}
