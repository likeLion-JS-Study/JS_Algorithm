n = int(input())
score = []

for _ in range(n):
  card = list(map(int, input().split()))
  max_score = 0
  for one in range(5):
    for two in range(one+1, 5):
      for three in range(two+1, 5):
        first = (card[one] + card[two] + card[three]) % 10
        if max_score < first:
          max_score = first
  score.append(max_score)

for i in range(n-1, -1, -1):
  if score[i] == max(score):
    print(i+1)
    break