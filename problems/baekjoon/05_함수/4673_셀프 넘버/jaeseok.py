def d(n):
  n = n + sum(map(int, str(n)))
  return n

nonSelfNum = set()

for i in range(1, 10001):
  nonSelfNum.add(d(i))

for j in range(1, 10001):
  if j not in nonSelfNum:
    print(j)