fixedCost, variableCost, notebookPrice = map(int, input().split())

if variableCost >= notebookPrice:
  print(-1)
else:
  print(int(fixedCost / (notebookPrice - variableCost))+1)