const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let board = []
for (let i = 0; i < 9; i++) {
  board.push(input[i].split(' ').map(Number));
}

// let flatBoard = board.flat();
let flatBoard = [].concat(...board);

let maxNum = Math.max(...flatBoard);
console.log(maxNum);

let maxNumIdx = flatBoard.indexOf(maxNum);
let row = Math.floor(maxNumIdx/9) + 1;
let col = (maxNumIdx%9) + 1;
console.log(row, col);