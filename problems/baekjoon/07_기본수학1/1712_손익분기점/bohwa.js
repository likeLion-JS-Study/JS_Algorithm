let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

//숫자로 바꿔주기 위해 *1 해줌


const margin = C - B;
const count = Math.floor(A / margin) + 1
//﻿ 판매 가격 - 가변 비용 = 마진 값이 나온다.
// 고정 비용에서 마진값을 나눠주면 손익분기점이 나온다.
// 손익분기점이 아닌 넘기는 수를 구해야 하므로 1을 더해준다.

// 근데 왜 굳이 1을 더하지? 0.1이런건 못더해주나..? 2라던지..


console.log(margin <= 0 ? -1 : count);

//마진이 0보다 작거나 음수면 -1을 출력, 그렇지 않으면 count를 출력한다.
