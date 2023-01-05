let input = require('fs').readFileSync(0).toString().split('\n').map(Number);

let array = [];

for (let i = 1; i<31; i++){
  if(input.includes(i)) continue;
  array.push(i);
}

array.sort(function(a, b)  {
  return a - b;
});

console.log(array[0] + `,` + array[1])


// 1~30까지 반복문을 돌려서 숫자가 있으면 continue해서 반복문 다음으로 넘어가게 하였고
// 해당숫자가 없으면 array에 없는 숫자 추가해주게 끔 push를 사용하였다.

// array에 없는 숫자 2개 들어오면 오름차순으로 정렬할 수 있게끔 sort함수를 이용하였다.
