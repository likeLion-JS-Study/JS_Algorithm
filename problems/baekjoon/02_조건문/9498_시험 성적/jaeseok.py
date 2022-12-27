# 시험 점수 입력 받기
n = int(input())

# 90 ~ 100 : A
if n >= 90 and n <= 100:
  print('A')
# 80 ~ 90 : B
elif n >= 80 and n < 90:
  print('B')
# 70 ~ 80 : C
elif n >= 70 and n < 80:
  print('C')
# 60 ~ 70 : D
elif n >= 60 and n < 70:
  print('D')
# ~ 60 : F
else:
  print('F')
