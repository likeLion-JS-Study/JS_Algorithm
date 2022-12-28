import sys

# 입력값 받기
a, b = map(int, input().split());

# 이 방식은 좀 더 빠르게 입력을 받을 수 있지만 삼성에서 쓰지 말라고 함...
# a, b = map(int, sys.stdin.readline().split())

hap = a + b
minus = a - b
mul = a * b
mok= a // b
nam = a % b

print(hap)
print(minus)
print(mul)
print(mok)
print(nam)