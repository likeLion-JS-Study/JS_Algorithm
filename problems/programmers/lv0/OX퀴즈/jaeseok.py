# solution 1
def solution(quiz):
  answer = []
  for i in range(quiz):
    res = quiz[i].split()
    if res[1] == '+':
      if int(res[0]) + int(res[2]) == int(res[4]):
        answer.append('O')
      else:
        answer.append('X')
    if res[1] == '-':
      if int(res[0]) - int(res[2]) == int(res[4]):
        answer.append('O')
      else:
        answer.append('X')
  return answer

# solution 2
# eval 함수는 매개변수로 받은 expression(우리가 아는 일반적인 사칙연산 '식')을 문자열로 받아서, 실행하는 함수다. 
def solution(quiz):
  return ['O' if eval(i.replace('=', '==')) else 'X' for i in quiz]