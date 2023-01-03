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
  const totalPrice = +input.shift();
  const n = +input.shift();
  const total = input.reduce((cal, curr, i) => {
    const [price, num] = curr.split(' ');
    // console.log(`price: ${price}, num: ${num}`);
    // console.log(`i: ${i}, cal: ${cal}, curr: ${curr}`);
    // console.log();
    return (cal += (+price * +num));
  }, 0);
  if (totalPrice === total) console.log("Yes");
  else console.log("No");
}