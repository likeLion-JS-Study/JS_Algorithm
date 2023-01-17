const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = [];
rl.on('line', function(line){
  input.push(line);
}).on('close', function(){
  solution();
  process.exit();
})

function solution() {
  const arr = Array.from(Array(9), () => Array(9).fill(null));
  for (let i = 0; i < 9; i++)
    arr[i] = input[i].split(' ').map(e=>+e);
  let max = -1;
  let posX = 0;
  let posY = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
        posX = i + 1;
        posY = j + 1;
      }
    }
  }
  console.log(max);
  console.log(posX + ' ' + posY);
}