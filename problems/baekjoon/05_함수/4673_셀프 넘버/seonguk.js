function notSelf(n) {
  let sum = n; // * e.g. n = 123

  while (true) {
    if (n === 0) break; // * n = 0 => break;
    sum += n % 10; // * sum = 123 + 3 + 2 + 1 = 129
    n = parseInt(n / 10); // * n = 123 => 12 => 1 => 0
  }

  return sum;
}

function self(n) {
  let notSelfList = []; // * notSelfNum Add
  let selfList = []; // * selfNum Add

  for (let i = 1; i <= n; i++) {
    let index = notSelf(i);

    if (index <= n) {
      notSelfList[index] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!notSelfList[i]) selfList.push(i); // * false 인 경우 selfList 추가
  }

  console.log(selfList.join("\n")); // * selfList 한 줄에 하나씩 출력
}

self(5); // * 10000 보다 작거나 같은 셀프 넘버 출력

// ! 핵심은 각 자리 수를 더해서 나온 값이 아니어야 한다 !
