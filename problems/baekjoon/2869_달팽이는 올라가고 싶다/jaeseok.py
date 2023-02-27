a, b, v = map(int, input().split())

# 도달하는 날 x일, 총 올라는 횟수 x번, 내려오는 횟수 (x-1)번
# ax - b(x-1) = v
# x = (v - b) / (a - b)
k = (v - b) / (a - b)
res = int(k) if k == int(k) else int(k) + 1 # 삼항 연산자 사용
print(res)