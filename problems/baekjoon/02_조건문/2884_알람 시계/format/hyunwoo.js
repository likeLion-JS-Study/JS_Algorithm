const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    solution();
    process.exit();
});

function solution() {
  const [h, m] = input[0].split(' ').map(e => +e);
  let result = h * 60 + m - 45;
  // console.log(result);
  result = (result < 0) ? result + 24 * 60 : result;
  // console.log(result);
  console.log(Math.floor(result / 60) + ' ' + result % 60);
}