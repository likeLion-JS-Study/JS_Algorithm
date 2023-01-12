const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    solution(input);
    process.exit();
});

function solution(input) {
  const numArr = [...input[1]].map(_=>+_);
  console.log(numArr.reduce((acc, curr) => (acc + curr)));
}