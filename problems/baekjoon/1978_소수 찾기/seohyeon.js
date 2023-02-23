const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(/\s/);

const num = +input[0];
const newArray = input.splice(2, num + 1);
let count = 0;
let itemNum = 0;

const findArray = newArray.map((item) => {
  itemNum = +item;
  if (itemNum === 1) {
    return 0;
  }

  for (let i = 1 + 1; i < itemNum; i++) {
    if (itemNum % i === 0) {
      itemNum = 0;
    }
  }
  return itemNum;
});

for (let i = 0; i < findArray.length; i++) {
  if (findArray[i]) {
    count++;
    //console.log(findArray[i]); //확인
  }
}

console.log(count);
