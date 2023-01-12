const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

/* -------------------------------------------------------------------------- */
/*                          concat vs spread operator                         */
/* -------------------------------------------------------------------------- */
// concat - string atomically
// spread - char-by-char 
// ex) let arr = [].concat('hello');
//         arr = ['hello'];   // atomically
//
// ex2) let arr = [...'hello'];
//          arr = ['h', 'e', 'l', 'l', 'o'];     // char-by-char
function solution() {
  const check = Array.from({length: 10000}, _=>false);
  let num = 0;
  while(++num < 10000) {
    let result = 0;
    result += num;
    const temp = [...(num + '')];
    let ret = temp.reduce((cal, curr) => {
      return cal + Number(curr);
    }, result);
    check[ret] = true;
  }
  check.forEach((item, idx) => {
    if (idx !== 0 && !item) console.log(idx);
  })
}