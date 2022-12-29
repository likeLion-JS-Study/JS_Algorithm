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
  const score = +input[0];
  if(90 <= score) {
    console.log('A');
  } else if(80 <= score) {
    console.log('B');
  } else if(70 <= score) {
    console.log('C');
  } else if(60 <= score) {
    console.log('D');
  } else {
    console.log('F');
  }
}