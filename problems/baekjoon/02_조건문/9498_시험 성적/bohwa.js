const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString();

let score = parseInt(input);


if(score>=90){
  console.log('A');
} else if (score>=80){
  console.log('B');
} else if (score>=70){
  console.log('C');
} else if (score>=60){
  console.log('D');
} else {console.log('F');}

/**시험점수를 정수로 만들기 위해 parseInt를 썼다.
 * 조건이 여러개니깐 else if를 사용함
 * 
 */