# 1. for문을 활용한 풀이
""" board = []

for _ in range(9):
  board.append(list(map(int, input().split())))

row = 0
col = 0
MAX = -99999;

for r in range(9):
  for c in range(9):
    if board[r][c] > MAX:
      MAX = board[r][c]
      row = r + 1
      col = c + 1
print(MAX)
print(row, col) """

# enumerate 활용한 풀이
arr = []
MAX = -99999
max_idx = ''
for r in range(9):
  for c, num in enumerate(list(map(int, input().split()))):
    if num > MAX:
      MAX = num
      max_idx = f'{r+1} {c+1}'

print(MAX)
print(max_idx)