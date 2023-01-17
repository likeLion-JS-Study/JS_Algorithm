const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = [];
rl.on('line', function(line){
  input.push(line);
}).on('close', function(){
  console.log(recurse(+input[0], '').split(',').join('\n'));
  // solution();
  process.exit();
})

// 풀이 1 : 완전탐색 - for
// function solution() {
//   let n = +input[0];
//   const arr = [];
//   while (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       if (n % i === 0) {
//         arr.push(i);
//         n = Math.floor(n / i);
//         break;
//       }
//     }
//   }
//   // console.log(arr.join('\n'));
// }


// 풀이 2 : 완전탐색 - 재귀
function recurse(n, str) {
  if (n === 1) return str;
  if (n < 1) return ;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      str +=  i + ',';
      return recurse(Math.floor(n / i), str);
    }
  }
}