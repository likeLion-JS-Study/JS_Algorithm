const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const numberList = input[1].split(' ').map(Number);
let primeNumber = [];

for (let i = 0; i < n; i++) {
  let a = numberList[i];
  let isPrimeNumber = true;
  if (a===1) {
    isPrimeNumber = false;
  } 
  else if (a===2) {
    isPrimeNumber = true;
  }
  else {
    for (let j = 2; j <= parseInt(a/2); j++) {
      if (a%j===0) {
        isPrimeNumber = false;
      }
    }
  }
  if(isPrimeNumber) {
    primeNumber.push(a);
  }
}

console.log(primeNumber.length);