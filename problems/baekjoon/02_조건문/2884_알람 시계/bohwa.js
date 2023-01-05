let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = input[0]; 
let minute = input[1]; 

minute = minute -45; //45분 일찍일어나야하니깐 45분 빼기하였다.

if(minute< 0){

minute = minute + 60;
hour = hour -1;

/* minute이 0보다 작아지면 60을 더해서 분을 만들어주고, 대신 hour도 1시간 빼주었다. */


if(hour === -1){
  hour = 23;
}

/* hour이 0보다 크거나같고, 23보다 작거나 같아야하므로 hour가 음수가 되었을 경우에는 hour를 23으로 만들어주었다.
hour이 -2가될리는 없어서 -1만 적용시켜주면 된다 */

}

console.log(hour + `:` + minute);
