function findSelfNum (startNum, endNum){
  let nonselfNumArr = [];
  let nonselfNum = 0;
  const numArr = [...Array(endNum).keys()].map(key => key + 1);

  for (let i = startNum; i <= endNum; i++){
    let a = i.toString().split('').map(Number);
    nonselfNum = i + a.reduce((a, b) => a + b, 0);
    nonselfNumArr.push(nonselfNum);
  }
  
  const selfNum = numArr.filter(x => !nonselfNumArr.includes(x));

  return selfNum;
}

const selfNum = findSelfNum(1,10000);

// 출력
selfNum.forEach((selfNum)=>{console.log(selfNum);});


// 첫 풀이

// let nonselfNumArr = [];

// 아래 반복문을 통해 셀프넘버가 아닌 수들을 먼저 찾아낸다.
// for (let i = 1; i <= 10000; i++) {
  // 숫자를 쪼갠다
//   let a = i.toString().split('').map(Number);
  // 각 자리수 + 해당 수를 더해 셀프넘버가 아닌 수를 도출하고 출력 배열에 추가한다
//   let nonselfNum = i + a.reduce((a, b) => a + b, 0);
//   nonselfNumArr.push(nonselfNum);
// }

// 1부터 10000까지 담긴 배열을 만들고, 셀프넘버가 아닌 배열을 활용하여 filter에 적용
// const findSelfNum = [...Array(10000).keys()].map(key => key + 1);
// const selfNum = findSelfNum.filter(x => !nonselfNumArr.includes(x));

// 출력
// selfNum.forEach((selfNum)=>{console.log(selfNum);});

