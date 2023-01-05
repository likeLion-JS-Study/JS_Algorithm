hour, minutes = map(int, input().split())

if minutes >= 45:
  print(hour, minutes - 45)
elif hour > 0 and minutes < 45:
  print(hour - 1, minutes + 15)
else:
  print(23, minutes + 15)