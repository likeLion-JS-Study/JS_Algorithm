board = []

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
print(row, col)