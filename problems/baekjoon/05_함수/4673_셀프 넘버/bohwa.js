//양의 정수 n의 d(n)은 n + 각자리수들의 합이므로 이를 코드로 나타내면 아래와 같음

function d(n) {
  let result = n;
  let resm = n.toString().split('');
// n 을 배열로 만들어서 반복문으로 각 자리수들을 더하게해주었다. 그리고 더한값을 result에 더해주었다.


  for (let i = 0; i < resm.length; i++) {
      result += parseInt(resm[i])
  }

  return result;
}



const range = 10000;
let selfNumbers = Array(range + 1).fill(true);
//10000도 포함시켜줘야하니깐 +1을 해주었다.
//일단 0~10000범위까지 true로 설정을 해주었다.

for (let i = 0; i <= range; i++){
selfNumber[d(i)] = false;
}
//셀프넘버가 아니면 false로 변환


// true index 만 출력
for (let i = 0; i < range; i++){
if(selfNumbers[i]){
 console.log(i);
}
}
