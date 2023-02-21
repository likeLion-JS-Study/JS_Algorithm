// 참고사이트 ( https://ko.javascript.info/task/factorial )
// 걸린시간 -> 1시간30분

function solution(n) {
  let result = 0
 // ex) 제한사항의 최대 값이 10의 팩토리얼이기 때문에 10번까지 반복
 for(let i = 1 ; i <= 10; i++) {
     // n이 factorial(i)보다 크다면 진행 후  최대 i를 구함
     if(n >= factorial(i)) {
         result = i
         continue
    // break 조건을 걸어서 탈출
     } else {
         break
     }
 }
 return result
}


// 재귀함수를 이용한 팩토리얼 
// 팩토리얼은 그 정의에 따라 n!을 n * (n-1)!로 바꿔쓸 수 있다.
// ex) n=5 라면 5*factorial(4) -> 4*factorial(3) -> ... ->1*factorial(0) 후 0! 에서 멈춘다 반환한다.
function factorial(n) {
return n ? n * factorial(n - 1) : 1;  
}