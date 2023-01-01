num = [i for i in range(1, 31)]

for _ in range(28):
  attendanceNumber = int(input())
  num.remove(attendanceNumber)

print(num[0])
print(num[1])