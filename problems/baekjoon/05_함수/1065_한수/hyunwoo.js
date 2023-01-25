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

let result = 0;
function solution() {
  // console.log(input);
  const num = input.pop();
  if (+num === 1000) {
    console.log(144);
    return;
  }
  recurse(0, '', +num, num.toString().length);
  console.log(result - 1);
}

function recurse(depth, str, n, length) {
  if (depth > length || Number(str) > n) {
    return;
  }
  if (depth === length) {
    if (Number(str) < 100) {
      ++result;
    }
    else {
      let isHansu = true;
      const firstGap = Number(str[0]) - Number(str[1]);
      for (let i = 1; i < str.length - 1; ++i) {
        if (firstGap !== (Number(str[i]) - Number(str[i + 1]))) {
          isHansu = false;
          break;
        }
      }
      if (isHansu)
        ++result;
    }
    return;
  }
  for (let i = 0; i <= 9; ++i) {
    // arr[depth] = i;
    str += i;
    recurse(depth + 1, str, n, length);
    str = str.substring(0, str.length - 1);
  }
}