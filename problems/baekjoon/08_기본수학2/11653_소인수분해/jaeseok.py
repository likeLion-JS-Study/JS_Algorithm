# 돌아가기는 하는데 런타임이 너무 말도안되게 걸린다...
""" N = int(input())

if N == 1 : print('')

for i in range(2, N+1):
  if N % i == 0:
    while N % i == 0:
      print(i)
      N /= i """

# 두 번째 방법
N = int(input())
i = 2
while N != 1:
  if N % i == 0:
    print(i)
    N /= i
  else:
    i + 1