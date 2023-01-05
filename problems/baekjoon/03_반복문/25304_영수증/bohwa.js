let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


const result = input[0];
const count = input[1];
const sum = 0;


for(let i =2; i < count+2; i++){

  let newArray = input[i].split(" ").map(function(element){
    return element});
  sum = (newArray[0]*newArray[1]) + sum;

}
/**예제 입력값 2번째줄부터 반복문을 돌리기 위해 i=2로 시작을 하였다
 * 2번째줄부터 우선은 배열로 만들어주기 위해서 split,map을 사용하였다.
 * 그리고 배열로 만들어진 newArray 의 index 0번째, 1번째 값을 곱해서 기존의 sum값 0에 더해주었다.
 * 이렇게 끝까지 반복하게되면 총 sum이 나오게 된다..
 */



if(result === sum){
  console.log("Yes");
}
else {
    console.log("No");
}

//result가 총 금액 sum과 동일할경우 yes를 출력, 동일하지 않으면 no을 출력하게끔 하였다.
