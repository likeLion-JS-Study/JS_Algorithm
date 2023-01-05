totalMoney = int(input())
totalProduct = int(input())

totalCalculate = 0

for i in range(totalProduct):
  productPrice, productPurchase = map(int, input().split())
  totalCalculate += productPrice * productPurchase

if totalMoney == totalCalculate:
  print('Yes')
else:
  print('No')