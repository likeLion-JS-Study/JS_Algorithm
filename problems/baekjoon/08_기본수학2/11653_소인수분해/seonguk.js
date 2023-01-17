let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let i = 2;

while (input !== 1) {
  if (input % i === 0) {
    input = input / i;
    console.log(i);
  } else {
    i++;
  }
}

// * 풀이

// 소인수분해를 진행하면서 사용된 소수를 출력하는 문제였다

// 그래서 소수는 2부터 시작이기에 i 값을 2로 선언하여 시작하였다. 우선 i 값이 계속 증가해야 하기에 while 문을 사용하였고, while 문을 종료 시키기 위해 input 값이 1 이 되면 멈추도록 설정하였다.

// 정수 N 에 i 로 나눴을 때 나머지 값이 0이 나오면 정수 N 에 i 를 나눈 것에 대한 몫을 N 값으로 설정하며, 사용한 i 값을 출력하도록 설계했다.

// 정수 N 에 i 로 나눴을 때 나머지 값이 0이 나오지 않는 경우는 소수가 아니기에 i++ 를 하여 다음 단계로 진행되도록 하였다.
