const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(N, numbers){
  let sum = 0;

  for(let i = 0; i < N; ++i){
    sum += +numbers[i];
  }
  console.log(sum);
}
