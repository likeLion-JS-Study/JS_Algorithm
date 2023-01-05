// 문제
/* 
X대학 M교수님은 프로그래밍 수업을 맡고 있다.
교실엔 30명의 학생이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어있다.
교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출하지 않은 학생 2명의 출석번호를 도출해내는 프로그램을 작성하시오.
*/

const fs = require("fs");

const inputData = fs.readFileSync("example.txt").toString().split("\n");
// 백준 예제에서 입력값이 줄바꿈되어 있으므로 "\n"을 넣는다.

const nums = inputData.map((num) => Number(num));
// 결과값을 도출해낼 값을 nums라고 선언하고 입력값을 map() property로 감싸준다.
// map() 속성은 배열의 요소를 반복해주는 역할을하는데, 여기서는 입력될 수를 자연수(num)로 바꿔준다. 이 값은 아래 함수에 적용될 수이다.

result(nums);
// 결과값은 nums에서 도출해낸다.

function result(nums) {
  let map = new Map();

  for (let i = 0; i <= nums.length; i++) {
    map.set(nums[i], 1);
  }
  // map 자료형으로 사용되어서 세팅하기 위해 사용된 코드일 뿐 큰 의미는 없다.

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
  /*
  해당 문제에서 총원은 30명이고 주어지는 수에서 입력된 수를 제외하고 출석을 확인하는 시스템을 도출하는 것이므로, i = 1이고, 30보다 작거나 같아야 한다. 해당 반복문은 조건이 만족하는데까지 반복한다.
  
  만약 선언된 map 배열에서 출석하지 못한 i요소를 도출해낸다.
  */
}
