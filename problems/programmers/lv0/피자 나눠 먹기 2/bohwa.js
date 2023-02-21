function solution(n) {
  // 한 판에 여섯 조각이니깐 6으로 설정해준다.
let pizza = 6
// 인원수 n명이랑 피자조각수랑 나눠서 나머지가 0이될때까지 +6을 더해준다.
while(pizza%n !== 0) {
    pizza+=6
} 
  // 나머지 0이되면 pizza를 6으로 나눠주면 몇박스인지 나온다.
return pizza/6}