input_list = []
for _ in range(5):
    input_list.append(int(input()))
input_list.sort()
print(sum(input_list) // 5)
print(input_list[2])