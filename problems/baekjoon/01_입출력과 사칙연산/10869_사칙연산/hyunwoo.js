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
  const [A, B] = input[0].split(' ').map(e=>+e);
  console.log(A);
  console.log(B);
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B));
  console.log(A % B);
}