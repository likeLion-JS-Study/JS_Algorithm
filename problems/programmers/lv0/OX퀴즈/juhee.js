function solution(quiz) {
  let result = [];
  quiz.forEach((question) => {
    // 숫자와 연산자 구조분해 할당
    let [firstNum, operator, secondNum, equal, answer] = question.split(' ');
    // 연산자 구분에 따른 연산 진행
    let realAnswer = operator === "+" ? +firstNum + +secondNum : +firstNum - +secondNum;
    // 퀴즈 답과 실제 답 비교
    let quizAnswer = realAnswer === +answer ? "O" : "X";
    result.push(quizAnswer)
  })
  return result;
}