let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if (min - 45 < 0) {
  min = min + 60 - 45;
  if (hour == 0) {
    hour = 24;
  }
  hour = hour - 1;
} else {
  min = min - 45;
}

console.log(hour, min);
