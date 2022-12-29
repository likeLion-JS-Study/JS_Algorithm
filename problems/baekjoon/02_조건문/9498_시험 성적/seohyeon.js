let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let A = Number(input[0]);

if (A >= 90) {
  console.log("A");
} else if (A >= 80 && 90 > A) {
  console.log("B");
} else if (A >= 70 && 80 > A) {
  console.log("C");
} else if (A >= 60 && 70 > A) {
  console.log("D");
} else {
  console.log("F");
}
