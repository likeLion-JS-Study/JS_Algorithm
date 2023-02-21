// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("example.txt").toString().split("\n");
const testCase = +input[0];
const numbers = input[1].split(" ").map(Number);
let result = 0;

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

numbers.forEach((num) => {
  if (isPrime(num)) result++;
});

console.log(result);
